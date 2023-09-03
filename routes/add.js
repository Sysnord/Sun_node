const {Router} = require('express');
const router = Router();

router.get('/',(req,res)=>{
    res.render('add', {
        title: 'Внесение данных',
        isAdd: true
    })
})
module.exports = router;