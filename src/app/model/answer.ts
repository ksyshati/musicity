import {Comment} from "./comment";

export class Answer{

  id: string;
  userFirstName: string;
  text: string;
  comment: Comment;

  constructor(id: string, userFirstName: string, text: string, comment: Comment) {
    this.id = id;
    this.userFirstName = userFirstName;
    this.text = text;
    this.comment = comment;
  }

}

