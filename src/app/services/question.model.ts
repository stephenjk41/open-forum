export interface Answer {
    qid: string;
    answer: string;
    author: string;
    upvote: number;
    downvote: number;
    upvotedUsers: string[];
    downvotedUsers: string[];
}
export interface Question {
    uid: string;
    title: string;
    body: string;
    author: string;
    time: string;
    userId: string;
    answers: any[];
}