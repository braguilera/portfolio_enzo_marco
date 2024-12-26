import { cn } from '../../lib/utils';
import Marquee from '../magicUI/Marquee';

const projects = [
  {
    name: "Administrador de torneos",
    body: "App para gestionar torneos con MVC y scrum.",
  },
  {
    name: "Gestor de Reclamos",
    body: "Sistema para registrar y gestionar reclamos.",
  },
];

const works = [
  {
    name: "Desarrollador Full-Stack",
    body: "Tabajando en Quadrant desde diciembre de 2024.",
  },
];

const firstRow = projects;
const secondRow = works;

const ReviewCard = ({ name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-40 w-full cursor-pointer overflow-hidden rounded-xl border p-4 transition-colors duration-200",
        "border-slate-400/[.1] bg-slate-50 hover:bg-slate-100",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-yellow-500 dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="m-0 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="absolute top-0 right-[50%] translate-x-[50%] translate-y-[-41%] flex h-[190px] w-2/3 flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent">

      <div className='w-full grid grid-cols-2 overflow-hidden'>
        <Marquee pauseOnHover vertical className="[--duration:25s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:25s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3"></div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3"></div>
    </div>
  );
}

export default MarqueeDemoVertical

