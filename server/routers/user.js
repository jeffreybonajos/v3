const express = require('express')
const router = new express.Router()
const userModel = require('../database/models/user')

const AUTH_USER_TYPE = 'authenticated'
const COOKIE_OPTIONS = {
  httpOnly: true,
  signed: true
}


router.post('/api/auth/login', async (req, res) => {
  try{
    const user  = await userModel.findByCredentials(req.body.username, req.body.password)
    if(!user) {
      return res.status(400).send('invalid username or password')
      
    }
    const userProfile = await userModel.getUserProfile(user.user_id)
    const userPosition = await userModel.getUserPosition(user.user_id)
    const userNewsFeed = await userModel.getUserNewFeed(user.user_id)
    const userTeamMember = await userModel.getUserTeamMember(user.user_id)
    const userData = {
      user_id: userProfile.user_id,
      name: userProfile.full_name,
      type: AUTH_USER_TYPE
    }
    res.cookie('token', userData, COOKIE_OPTIONS);
    res.status(200).json({userData, userProfile, userPosition, userNewsFeed, userTeamMember});
  } catch(error) {
    res.json(error)
  } 
    

})

router.get('/api/auth/home', async (req, res) => {
  const { signedCookies = {} } = req;
  const { token } = signedCookies;
  if(token && token.user_id){
    const userProfile = await userModel.getUserProfile(token.user_id)
    const userPosition = await userModel.getUserPosition(token.user_id)
    return res.json({userProfile, userPosition});
  }
  res.status(404);
})

router.post('/api/auth/logout', async (req, res) => {
  res.clearCookie('token', COOKIE_OPTIONS);
  res.sendStatus(204);
})

router.get('/api/auth/user', async (req, res) => {
  try{
    const user_id = req.body.user_id
    const userProfile = await userModel.getUserProfile(user_id)
    return res.send({ user: userProfile});
  } catch(err){
    res.status(404);
  }
})

router.post('/api/auth/logout', async (req, res) => {
  res.clearCookie('token', COOKIE_OPTIONS);
  res.sendStatus(204);
})




// router.post('/api/auth/login', async (req, res) => {
//   try {
//     const { user } = await userModel.findByCredentials(req.body.username, req.body.password)
//     if(!user){
//       res.status(500).send()
//     }
//     // const {token} = jwt.sign({ user_id: user.user_id.toString() }, 'awesomeversionthree')
//     // const {userfullInfo} = await userModel.getUserProfile(user.user_id)
//     // const cookieOption = {
//     //   httpOnly: true,
//     //   expires: 0
//     // }
//     // res.cookie('token', token, cookieOption)
//     res.send({user})
//   } catch(e){
//     res.status(400).send(e)
//   }
// })

// router.get('/api/home', async (req, res) => {
//   try {
//         const token = req.body.token || req.query.token || req.header('Authorization').replace('Bearer', '') || req.header.cookies
//         const decoded = jwt.verify(token, 'awesomeversionthree')
//         const user = await userModel.getUserProfile(decoded.user_id)

//         if(!user) {
//             throw new Error ('error auth')
//         }
//         req.user = user
//         res.send({user: req.user})
//     } catch(e) {
//         res.status(403).send(e)
//     }
// }) 

// router.post('/api/logout', authMiddleware, async (req, res) => {
//   try {
//     req.token = []
//     await req.user.save()
//     res.send()
//   } catch(e) {
//     res.status(500).send()
//   }
// })




module.exports = router;