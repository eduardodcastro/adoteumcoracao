import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreatePetFeedController } from './controllers/petfeed/CreatePetFeedController';
import { ListPetFeedController } from './controllers/petfeed/ListPetFeedController';
import { PetAdoptedController } from './controllers/petfeed/PetAdoptedController';
import { PetFavoriteController } from './controllers/favorite/PetFavoriteController';
import { PetFavoriteRemoveController } from './controllers/favorite/PetFavoriteRemoveController';
import { ListPetFavoriteController } from './controllers/favorite/ListPetFavoriteController';
import { CreateMessageController } from './controllers/message/CreateMessageController';
import { DeleteMessageController } from './controllers/message/DeleteMessageController';
import { ListMessageController } from './controllers/message/ListMessageController';

import { isAuthenticated } from './middlewares/isAuthenticated';
import uploadConfig from './config/multer';

const upload = multer(uploadConfig.upload("./tmp"));

const router = Router();

// Router Users
router.post('/users', upload.single('file'), new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/userinfo', isAuthenticated, new DetailUserController().handle)

// Router PetsFeed
router.post('/petfeed', isAuthenticated, upload.single('file'), new CreatePetFeedController().handle)
router.get('/petlist', isAuthenticated, new ListPetFeedController().handle)
router.put('/pet/adopted', isAuthenticated, new PetAdoptedController().handle)
router.post('/pet/favorite', isAuthenticated, new PetFavoriteController().handle)
router.delete('/pet/favorite', isAuthenticated, new PetFavoriteRemoveController().handle)
router.get('/pet/favoriteuser', isAuthenticated, new ListPetFavoriteController().handle)

// Router Messages
router.post('/message', isAuthenticated, new CreateMessageController().handle)
router.delete('/message', isAuthenticated, new DeleteMessageController().handle)
router.get('/message/list', isAuthenticated, new ListMessageController().handle)

export { router };
