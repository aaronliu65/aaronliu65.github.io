export type ArtworkKind = 'forma' | 'orbit' | 'fieldnotes';

interface ArtworkProps {
  kind: ArtworkKind;
  featured?: boolean;
  modal?: boolean;
}

const backgrounds: Record<ArtworkKind, string> = {
  forma: 'bg-[#e8e3d9] px-[7%] py-10 text-[#403e34] max-[560px]:p-[23px]',
  orbit: 'grid place-items-center bg-[#dce1e7] p-9 max-[800px]:p-[18px] max-[560px]:p-[30px]',
  fieldnotes: 'bg-[#b4c4bc] p-[26px] text-white',
};
const caption = 'absolute bottom-[30px] left-[7%] text-[8px] tracking-[1.2px]';
// Complete class strings keep every variant discoverable by Tailwind's scanner.
const barHeights = ['h-9', 'h-[61px]', 'h-[45px]', 'h-20', 'h-[55px]', 'h-24', 'h-[70px]'];

export function Artwork({ kind, featured = false, modal = false }: ArtworkProps) {
  const height = modal
    ? 'h-[300px] max-[560px]:h-[250px]'
    : featured
      ? 'h-[510px] max-[800px]:h-[420px] max-[560px]:h-[320px]'
      : 'h-[330px] max-[800px]:h-[280px] max-[560px]:h-[300px]';

  return (
    <div aria-hidden="true" className={`relative overflow-hidden transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover/project:scale-[1.025] ${height} ${backgrounds[kind]}`}>
      {kind === 'forma' ? (
        <>
          <div className="flex justify-between font-editorial text-[28px] max-[560px]:text-[22px]">
            forma<span className="self-center font-sans text-[9px] max-[560px]:text-[6px]">Objects for everyday living ↗</span>
          </div>
          <div className={`relative z-2 font-editorial leading-[1.03] ${modal ? 'mt-5 text-[60px] max-[560px]:text-[48px]' : 'mt-[70px] text-[86px] max-[800px]:text-[65px] max-[560px]:mt-12 max-[560px]:text-[52px]'}`}>
            Less, but<br /><i>better.</i>
          </div>
          <div className={`absolute right-[15%] h-60 w-[190px] rounded-[30%_30%_43%_43%] bg-[repeating-linear-gradient(90deg,#9d5b3c_0px,#ac6c49_3px,#bf845d_5px,#b1744e_8px)] shadow-[inset_-34px_-15px_40px_#65382377,20px_26px_32px_#65543930] max-[800px]:right-[11%] max-[560px]:right-[8%] before:absolute before:-top-[38px] before:left-12 before:h-[66px] before:w-[94px] before:rounded-[8px_8px_22px_22px] before:bg-[repeating-linear-gradient(90deg,#a86a48_0,#c58b60_4px,#b37850_7px)] before:content-[''] after:absolute after:-top-[43px] after:left-12 after:h-[21px] after:w-[94px] after:rounded-full after:border-7 after:border-[#c28a62] after:bg-[#65442f] after:content-[''] ${modal ? 'bottom-[25px] origin-bottom-right scale-[.65] max-[560px]:scale-[.48]' : 'bottom-[61px] -rotate-6 max-[800px]:origin-bottom-right max-[800px]:rotate-0 max-[800px]:scale-[.8] max-[560px]:bottom-12 max-[560px]:scale-[.6]'}`} />
          <div className={caption}>THE CONSIDERED COLLECTION — VOL. 01</div>
        </>
      ) : kind === 'orbit' ? (
        <div className="flex h-[232px] w-full -rotate-4 gap-4 rounded-md bg-[#fbfbf9] p-4 shadow-[0_15px_35px_#303e4d1a] max-[800px]:gap-2 max-[800px]:p-2.5">
          <aside className="w-[62px] shrink-0 border-r border-[#eee] text-2xl font-bold">
            o.<br /><small className="text-[7px] leading-[2] font-normal text-[#8a8b8e]">Workspace<br /><br />Overview<br />Projects<br />Notes</small>
          </aside>
          <div className="min-w-0 flex-1 pt-2.5">
            <small className="text-[5px] tracking-[1px]">MONDAY, IN YOUR OWN TIME</small>
            <h3 className="my-3 text-[17px] font-medium">A little more focus.</h3>
            <div className="grid grid-cols-[1.1fr_1fr] gap-2.5">
              <div className="rounded-[5px] bg-[#f1f2ee] p-2.5 text-[7px]">
                <span>Weekly rhythm</span>
                <div className="flex h-[78px] items-end gap-[7px]">
                  {barHeights.map((height, index) => <i key={index} className={`block max-h-[60px] w-[9px] rounded-xs bg-[#a1b6a2] ${height}`} />)}
                </div>
              </div>
              <div className="relative rounded-[5px] bg-[#ed7655] p-2.5 text-[17px] leading-[1.2] tracking-[-.5px]">
                One thing<br />at a time.<span className="absolute right-2.5 bottom-2.5">↗</span>
              </div>
            </div>
            <div className="mt-3.5 border-t border-[#eee] pt-2.5 text-[7px]">○ &nbsp; Make something meaningful <span className="float-right text-[#888]">Today</span></div>
          </div>
        </div>
      ) : (
        <>
          <div className="relative z-3 flex justify-between text-[11px] tracking-[1px]">FIELDNOTES <span className="text-[7px] tracking-normal">A journal of getting lost.</span></div>
          <div className="absolute top-[70px] right-[24%] size-[58px] rounded-full bg-[#f1e2b7]" />
          <div className="absolute -bottom-[110px] -left-[90px] h-80 w-[110%] -rotate-18 rounded-[40%_20%_0_0] bg-[#6d8274]" />
          <div className="absolute -bottom-[180px] left-[100px] h-[370px] w-[110%] rotate-25 rounded-[40%_20%_0_0] bg-[#3b5649]" />
          <div className="absolute top-[114px] left-[35px] z-2 font-editorial text-[54px] leading-[.96] tracking-[-2px] max-[800px]:text-[44px]">The art of<br /><i>going slow.</i></div>
          <div className={caption}>ISSUE 001 &nbsp; / &nbsp; OUT THERE, SOMEWHERE</div>
        </>
      )}
    </div>
  );
}
