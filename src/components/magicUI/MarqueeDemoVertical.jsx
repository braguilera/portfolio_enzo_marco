import { cn } from '../../lib/utils';
import Marquee from '../magicUI/Marquee';

const projects = [
  {
    name: "Proyecto 1",
    body: "Mi primer Proyecto XD",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Proyecto 2",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Proyecto 3",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
];

const works = [
  {
    name: "Trabajo 1",
    body: "Mi primer Proyecto XD",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Trabajo 2",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
];

const firstRow = projects;
const secondRow = works;

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-40 w-[200px] cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-slate-100/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="absolute bottom-0 right-[50%] translate-x-[50%] translate-y-[-50%] flex h-[230px] w-3/4 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background bg-slate-200">
      <h3 className=' font-semibold text-xl mb-4 text text-gray-800 w-full text-center'>Experiencia</h3>
      <div className='w-full flex overflow-hidden'>
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

