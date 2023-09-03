const {Router} = require('express');
const router = Router();

router.get('/',(req,res)=>{
    res.render('reports', {
        title: 'Отчеты',
        isReports: true
    })
})
module.exports = router;