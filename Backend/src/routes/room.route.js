import Router from 'express'
import { addNewRoom, getRooms } from '../controllers/room.controller.js'
import {verifyJWT} from '../middlewares/auth.middleware.js'
import {upload} from '../middlewares/multer.middleware.js'

const router = Router()

router.route('/add-new-room').post(
    verifyJWT ,
    upload.fields([
        {
            name: "roomImages",
        }
    ]),
    addNewRoom
)

router.route('/fetch-rooms').get(verifyJWT, getRooms)

// router.route('/delete-property').post(verifyJWT, deleteProperty)

// router.route('/delete-all-property').post(verifyJWT, deleteAllProperty)

export default router;