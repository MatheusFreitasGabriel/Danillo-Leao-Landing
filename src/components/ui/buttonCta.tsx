/* Arquivo alterado na data 02/03/2026 as 17:35 */
/* Autor: Matheus de Freitas */

type ButtonCtaProps = {
    children: React.ReactNode;
  };
  
  export default function ButtonCta({ children }: ButtonCtaProps) {
    return (
      <button
        className="
          relative
          h-[42px] md:h-14
          px-4 md:px-12
          bg-gold-dark
          overflow-hidden
          group
          cursor-pointer
          transition-all
          duration-500
          opacity-0 
          animate-fade-slide 
          delay-4
        "
      >
        {/* Background que entra */}
        <span
          className="
            absolute inset-0
            bg-gold-light
            translate-x-full
            group-hover:translate-x-0
            transition-transform
            duration-500
            ease-in-out
          "
        />
  
        {/* Texto */}
        <span
          className="
            relative
            text-base md:text-[20px]
            font-bold
            text-white
            transition-colors
            duration-500
            group-hover:text-gold-dark
          "
        >
          {children}
        </span>
      </button>
    );
  }