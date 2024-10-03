import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CommunityPage = () => {
  const navigate = useNavigate();

  /*   const boardList = [
    { id: 1, title: "사과 공지방", nickname: "판매자11", product: "사과", lastChat: "최근 채팅입니다", buyers: 10 },
    { id: 2, title: "사과 공지방", nickname: "판매자12", product: "사과", lastChat: "최근 채팅입니다", buyers: 10 },
    { id: 3, title: "사과 공지방", nickname: "판매자13", product: "사과", lastChat: "최근 채팅입니다", buyers: 10 },
    { id: 4, title: "사과 공지방", nickname: "판매자14", product: "사과", lastChat: "최근 채팅입니다", buyers: 10 },
    { id: 5, title: "사과 공지방", nickname: "판매자15", product: "사과", lastChat: "최근 채팅입니다", buyers: 10 },
    { id: 6, title: "배 공지방", nickname: "판매자21", product: "사과", lastChat: "최근 채팅입니다", buyers: 10 },
    { id: 7, title: "배 공지방", nickname: "판매자22", product: "사과", lastChat: "최근 채팅입니다", buyers: 10 },
    { id: 8, title: "배 공지방", nickname: "판매자23", product: "사과", lastChat: "최근 채팅입니다", buyers: 10 },
    { id: 9, title: "배 공지방", nickname: "판매자24", product: "사과", lastChat: "최근 채팅입니다", buyers: 10 },
    { id: 10, title: "배 공지방", nickname: "판매자25", product: "사과", lastChat: "최근 채팅입니다", buyers: 10 },
  ]; */

  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const { data: response } = await api.board.getAllBoards();

        console.log(response);

        setBoardList(response.boardList);

        return response.boardList;
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const Board = ({
    board,
  }: {
    board: {
      boardId: number;
      title: string;
      nickname: string;
      product: string;
      lastChat: string;
      buyers: number;
      lastMessagedAt: string;
    };
  }) => {
    const content = [
      { contentType: "판매자", contentData: board.nickname },
      { contentType: "판매물품", contentData: board.product },
      { contentType: "마지막 채팅", contentData: board.lastChat },
    ];

    const onClick = () => navigate(`/community/${board.boardId}`);

    return (
      <button
        onClick={onClick}
        className="flex flex-col w-full gap-2 p-4 text-black bg-white border border-custom-gray-dark max-w-96"
      >
        <header className="relative flex items-center justify-center w-full ">
          <div className="text-sm text-custom-gray-dark">{"게시글 제목"}</div>
          <h3 className="flex-1 ml-auto text-xl font-bold text-custom-green">{board.title}</h3>
          {board.buyers && <div className="absolute right-0 text-custom-gray-dark">참여 인원: {board.buyers}</div>}
        </header>
        {/* {content.map(({ contentType, contentData }, idx) => (
          <div key={idx} className="flex w-full">
            <div className="w-1/3 mr-1 font-semibold text-left border-r border-black h-[80%] items-center flex text-custom-green-300">
              {contentType}
            </div>
            <span className="ml-auto truncate">{contentData}</span>
          </div>
        ))} */}
      </button>
    );
  };

  return (
    /* grid로 변경 예정 */
    <div className="flex flex-wrap justify-center w-full gap-4 px-4 py-6 mx-auto">
      {boardList?.map((board) => (
        <Board key={board.boardId} board={board} />
      ))}
    </div>
  );
};

export default CommunityPage;
