const TITLE_CLASS = 'text-2xl font-bold tet-gray-800 my-2';

export default function Aboutme() {
  return (
    <section className='bg-gray-100 shadow-lg p-8 m-8 text-center'>
      <h2 className={TITLE_CLASS}>Who am I?</h2>
      <p>
        프론트엔드 개발자 정규식
        <br />
      </p>
      <h2 className={TITLE_CLASS}>Career</h2>
      <p>아틀라스 네트웍스 2023.09 ~</p>
      <h2 className={TITLE_CLASS}>Skills</h2>
      <p>
        Typescript, Javascript
        <br />
        React.js, Next.js
        <br />
        Redux, Recoil, React Query
        <br />
        Styled Components, TailwindCSS, SCSS, MUI
        <br />
        Git, Github Action
      </p>
    </section>
  );
}
