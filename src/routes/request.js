import express from 'express'
import RequestController from '../controller/request.js'
import Validate from '../middleware/Validate.js'
const router = express.Router()

router.put('/assign/:srno',Validate,RequestController.assignRequest)
router.put('/close/:srno',Validate,RequestController.closeRequest)
router.post('/',RequestController.createRequest)
router.get('/:srno',RequestController.getRequestDetails)
export default router