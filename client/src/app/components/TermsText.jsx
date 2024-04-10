export default function TermsText({ title, text }) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-row items-center m-auto lg:m-0">
        <h3 className="text-start lg:text-nowrap text-xl font-bold text-red-600 ol:text-[1.4rem]">
          {title}
        </h3>
        <span className="hidden lg:flex ml-12 w-full border-t border-red-600"></span>
      </div>
      <p className="text-left font-nunito text-base ol:text-[1.1rem] mt-4">{text}</p>
      <span className="lg:hidden border-t border-red-600"></span>
    </section>
  );
}
