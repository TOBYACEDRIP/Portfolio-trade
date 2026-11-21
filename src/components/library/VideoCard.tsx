import Image from "next/image";
import { Play } from "lucide-react";
import { getCategory, youtubeThumb, youtubeUrl, type LibraryVideo } from "@/config/library";

/** Thumbnail card that opens the lesson on YouTube in a new tab. */
export function VideoCard({ video }: { video: LibraryVideo }) {
  return (
    <a
      href={youtubeUrl(video.youtubeId)}
      target="_blank"
      rel="noopener noreferrer"
      className="surface group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
    >
      <div className="relative aspect-video overflow-hidden bg-ice">
        <Image
          src={youtubeThumb(video.youtubeId)}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy/50 via-transparent to-transparent" aria-hidden="true" />
        <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
          <Play size={20} className="ml-0.5" fill="currentColor" />
        </span>
        {video.duration && (
          <span className="absolute bottom-3 right-3 rounded-md bg-navy/85 px-2 py-0.5 font-mono text-[0.6875rem] text-white">{video.duration}</span>
        )}
        {video.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-peach px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-[#7a3d10]">Featured</span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow text-sky-deep!">{getCategory(video.category).label}</p>
        <h3 className="mt-3 text-lg font-bold leading-snug text-navy">{video.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{video.description}</p>
        <span className="sr-only"> (opens YouTube in a new tab)</span>
      </div>
    </a>
  );
}
