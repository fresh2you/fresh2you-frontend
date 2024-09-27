/* 게시판: 공지글, 게시글: 공지글의 판매자 전용 채팅 */

/* 게시판 등록 */
declare interface IPostBoardResponse extends defaultApiResponse {
  data: {
    boardId: number;
    title: string;
    createdAt: string;
  };
}

/* 게시판 상세 조회 */
declare interface IGetBoardMessageResponse extends defaultApiResponse {
  data: {
    boardMessageId: number;
    messageType: "TEXT";
    content: string;
    isDeleted: boolean;
    createdAt: string;
    isMine: boolean;
  };
}

/* 게시글 추가 */
declare interface IPostBoardMessageResponse extends defaultApiResponse {
  data: {
    boardMessageId: number;
    messageType: "TEXT" | "IMAGE";
    content: string;
    createdAt: string;
  };
}

/* 게시판 삭제 */
declare interface IDeleteBoardResponse extends defaultApiResponse {
  data: {
    boardId: number;
    deletedAt: string;
  };
}

/* 게시판 수정 */
declare interface IPatchBoardResponse extends defaultApiResponse {
  data: {
    boardId: number;
    title: string;
    updatedAt: string;
  };
}

/* 게시글 삭제 */
declare interface IDeleteBoardMessageResponse extends defaultApiResponse {
  data: {
    messageId: number;
    deletedAt: string;
  };
}
