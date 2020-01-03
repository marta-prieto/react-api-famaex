import React from 'react';


const ReportsList = () => {
  return (
    <main className="main__app">
      <section className="section__app">
        <ul className="main__list-reports">
          <div className="container__articles">
            <div className="container__grid-1">
              <article className="main__card-article">
                <h2 className="name__report">Informe 1</h2>
                <p className="text__report">Esto es una descripción corta del informe 1.En versión desktop la altura de esta sección debe llegar hasta la altura de la del informe 4</p>
              </article>
            </div>
            <div className="container__grid-2">
              <article className="main__card-article">
                <h2 className="name__report">Informe 2</h2>
                <p className="text__report">Esto es una descripción del informe 2. En este caso la sección debe de ajustarse al largo del texto. Como el texto es largo, la altura deberá ser bastante larga también. Si el texto fuera más corto, la altura será menor.</p>
              </article>
            </div>
            <div className="container__grid-3">
              <article className="main__card-article">
                <h2 className="name__report">Informe 3</h2>
                <p className="text__report">Descripción corta del informe 3.Como en el caso del informe 3 la altura será el combinado entre el informe 2 y el informe 4</p>
              </article>
            </div>
            <div className="container__grid-4">
            <article className="main__card-article">
              <h2 className="name__report">Informe 4</h2>
              <p className="text__report">Una descripción corta del informe 4.</p>
            </article>
            </div>
          </div>
        </ul>
      </section>
      <footer className="footer__app">
        <span className="footer__title">footer |</span>
        <nav className="footer__nav">
          <ul className="footer__menu">
            <li className="footer__list">
              <a className="footer__link" href="/">con |</a>
            </li>
            <li className="footer__list">
              <a className="footer__link" href="/"> algunos |</a>
            </li>
            <li className="footer__list">
              <a className="footer__link" href="/">links</a>
            </li>
          </ul>
        </nav>
      </footer>
    </main>

  );
};


export default ReportsList;
