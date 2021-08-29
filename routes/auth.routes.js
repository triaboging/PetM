const Router = require('express')
const router = new Router()
const config = require('config')
const User = require('../models/User')
const Posts = require('../models/Posts')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authMiddleWare = require('../middleware/authMiddleWare')
const { check, validationResult } = require('express-validator')
const uuid = require('uuid')

// /api/auth/register
router.post('/register',
    [check('email', 'некорректный email').isEmail(),
    check('password', 'минимальная длина пароля 6 символов').isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Некорректные данные при регистрации"
                })
            }
            const { email, password } = req.body



            const candidate = await User.findOne({ email: email })
            if (candidate) {
                res.status(400).json({ message: 'Taкой пользователь уже усть...' })
            }
            const hashedPassword = await bcrypt.hash(password, 12)
            const activationLink = uuid.v4()
            console.log('activationLink', activationLink)
            const user = new User({ email, password: hashedPassword, activationLink })
            await mailService.sendActivationMail(email, `${config.get("API_URL")}/api/auth/activate/${activationLink}` )

            await user.save()
            res.status(201).json({ message: 'Пользователь создан' })
        } catch (e) {
            res.status(500).json({ message: "хмм, вот ведь незадача, что-то пошло не так" })
            console.log(e)
        }
    })

router.post('/login',
    [check('email', 'Введите корректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists()]
    , async (req, res) => {
        try {
            console.log('hhhhhhhh')
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    massage: "Некорректные данные при входе в систему"
                })
            }
            const { email, password } = req.body
            const user = await User.findOne({ email: email })
            if (!user) {
                return res.status(400).json({ message: 'Пользователь не найден' })
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({
                    massage: 'неверный пароль'
                })
            }
            const token = jwt.sign({ id: user.id },//хешируем userID
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )
            res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email
                },
                message: 'Пользователь  найден'
            })

            // const hashedPassword = await bcrypt.hash(password, 12)
            // const user = new User({email,  password: hashedPassword})
            // await user.save()
            // res.status(201).json({message: 'Пользователь создан'})
        } catch (e) {
            res.status(500).json({ message: "хмм, вот ведь незадача, что-то пошло не так" })
            console.log(e)
        }
    })

    router.get('/activate/:link',
    async(req, res)=> {
        try{
            const activationLink = req.params.link
            const user = await User.findOne({activationLink})
            if(!user){
                throw new Error('Некорректная ссылка для активации')
            }
            user.isActivated = true
            await user.save()
            return res.redirect('http://localhost:3000/confirmation'),
            res.json({ message: "аккаунт подтвержден" })

        }catch(e){
            console.log(e)
        }
    }
);
router.get('/qqq', async (req, res) => {
    try {
        const { email } = req.body

        // const user = new User({email,  password})
        // await user.save()

        res.status(200).json("шото есть ")
        const getUser = await User.findOne({ email })

        if (getUser) { ({ message: `есть такой ${getUser.password} ` }) }
        res.json('сервер работает, как ни странно...')
    } catch (e) {

    }
})
router.get('/auth', authMiddleWare,
 async (req, res) => {
    try {
        console.log('vvvvvvvvv')
        const user = await User.findOne({_id: req.user.id })
        const token = jwt.sign({ id: user.id },//хешируем userID
            config.get('jwtSecret'),
            { expiresIn: '1h' }
        )
        
        return res.json({
            token,
            
            user: {
                id: user.id,
                email: user.email
            },
            message: 'Пользователь прошел аутентифиакацию и обновил token'
        })
    }
    catch (e) {
        console.log(e)
        res.send({ message: "Server error" })
    }
})
// ////////////////////////
router.post('/create', authMiddleWare,
 async (req, res) => {
    try {
        console.log('место №200')
         const user = await User.findOne({_id: req.user.id })
        // const token = jwt.sign({ id: user.id },//хешируем userID
        //     config.get('jwtSecret'),
        //     { expiresIn: '1h' }
        // )
        const { title, discription } = req.body
        console.log('запрос', req.body)
        console.log('значения', title, discription)
        const post = new Posts({title, discription, owner: req.user.id});
        await post.save()
        
        return res.status(201).json({
            
            post,
            user: {
                id: user.id,
                email: user.email,
                title,
                discription
            },
            message: 'новый пост создан'
        })
    }
    catch (e) {
        console.log(e)
        res.send({ message: "Server error" })
    }
})
router.get('/getpost',  authMiddleWare,
    async(req, res) => {
        try{
            const posts = await Posts.find({ owner: req.user.id })
            return res.status(201).json({
                posts,
                
                message: 'посты получены'
            })
        }
        catch(e){
            res.status(500).json({ message: "хмм, вот ведь незадача, что-то пошло не так" })
            console.log(e)
        }
    }
)
///////////////////
router.get('/detail/:id',  authMiddleWare,
    async(req, res) => {
        try{
            id = req.params.id
            console.log('место 445', id)
            const post = await Posts.findById({ _id: id })
            const owner = post.owner
            const user = await User.findOne({_id: owner})
            const email = user.email
            console.log('owner: ', owner )
            console.log('user: ', user )
            
            return res.status(201).json({
                post,
                email,
                message: 'пост получен'
            })
        }
        catch(e){
            res.status(500).json({ message: "хмм, вот ведь незадача, что-то пошло не так" })
            console.log(e)
        }
    }
)

module.exports = router