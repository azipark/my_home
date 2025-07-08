import React from "react";

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: {
    title: string;
    image: string;
    description: string[];
    url?: string; // url을 optional로 변경
  } | null;
}

/**
 * ProjectModal은 프로젝트 상세 정보를 중앙 정렬된 팝업 형태로 보여주는 컴포넌트입니다.
 * - open: 모달 표시 여부
 * - onClose: 닫기 버튼 클릭 시 실행할 함수
 * - project: 표시할 프로젝트 데이터(없으면 렌더링 안 함)
 *
 * SOLID 원칙 중 단일 책임 원칙을 지키기 위해, 모달의 열림/닫힘 상태와 데이터는 부모에서 관리합니다.
 */
const ProjectModal: React.FC<ProjectModalProps> = ({ open, onClose, project }) => {
  if (!open || !project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div 
        className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl max-w-md w-full mx-4 p-6 relative flex flex-col items-center"
        style={{ animation: 'fadeIn 0.2s' }}
      >
        <button
          className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center text-2xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors rounded-full"
          onClick={onClose}
          aria-label="닫기"
        >
          &times;
        </button>
        <img
          src={project.image}
          alt={project.title + ' thumbnail'}
          className="w-full max-w-xs h-48 object-cover rounded-md mb-4 border border-zinc-200 dark:border-zinc-700 mt-6"
        />
        <h2 className="text-xl font-bold mb-2 text-center">{project.title}</h2>
        <ul className="mb-4 w-full text-sm text-muted-foreground space-y-1">
          {project.description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors w-full text-center"
          >
            프로젝트 바로가기
          </a>
        )}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 640px) {
          .max-w-md {
            padding: 1.5rem 0.5rem;
            border-radius: 0.75rem;
          }
          img {
            height: 120px;
            max-width: 100%;
          }
          h2 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;