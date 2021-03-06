import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { loggedUser } from './user.reducer';
import { user } from './user.reducer';
import { changePassword } from './user.reducer';
import { mainCategories } from './mainCategory.reducer';
import { subCategories } from './subCategory.reducer';
import { groups } from './group.reducer';
import { posts} from './post.reducer';
import { comments} from './comment.reducer';
import { events } from './event.reducer';
import { friends, friendsInvitations, friendsConfirmed } from './friend.reducer';
import { messages } from './message.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  user,
  loggedUser,
  changePassword,
  mainCategories,
  subCategories,
  groups,
  posts,
  comments,
  events,
  friends,
  friendsInvitations,
  friendsConfirmed,
  messages,
  alert
});

export default rootReducer;
