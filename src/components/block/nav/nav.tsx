import Button from "../../ui/button/button";
import "./nav.scss";

function Nav(): JSX.Element {
    return (
        <div className="nav">
            <div className="nav__item">
                <Button styleClass='button button__circle' picture={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>} />
            </div>
            <a href="#" className="nav__item"><img src="/logo.png" alt="логотип" /></a>
            <a href="#" className="nav__item">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.6366 7.49241C22.4954 7.29518 22.3059 7.19656 22.0682 7.19656H6.9325L6.52171 6.12711C6.41768 5.77648 6.2765 5.47698 6.09818 5.22862C5.91985 4.98025 5.73037 4.80494 5.52975 4.70267C5.32913 4.6004 5.15452 4.53101 5.00591 4.49448C4.8573 4.45796 4.7087 4.4397 4.56009 4.4397H1.50621C1.31302 4.4397 1.14955 4.50544 1.01581 4.63693C0.882059 4.76841 0.815186 4.93642 0.815186 5.14096C0.815186 5.25784 0.844907 5.37106 0.90435 5.48063C0.963793 5.59021 1.04924 5.67421 1.1607 5.73265C1.27215 5.79109 1.38732 5.82031 1.50621 5.82031H4.56009C4.61953 5.82031 4.67526 5.82761 4.72727 5.84222C4.77929 5.85683 4.84987 5.91892 4.93904 6.02849C5.0282 6.13807 5.10251 6.30242 5.16195 6.52157L8.35913 15.3005C8.38885 15.3882 8.43715 15.4722 8.50402 15.5525C8.5709 15.6329 8.64891 15.695 8.73808 15.7388C8.82724 15.7826 8.92384 15.8045 9.02786 15.8045H18.6576C18.8062 15.8045 18.9437 15.7607 19.07 15.673C19.1963 15.5854 19.2818 15.4758 19.3263 15.3443L22.7369 8.13888C22.8112 7.90513 22.7778 7.68964 22.6366 7.49241ZM18.1672 14.402H9.58514L7.31145 8.59908H21.0428L18.1672 14.402ZM16.8818 16.565C16.3914 16.565 15.9715 16.7367 15.6223 17.08C15.2731 17.4234 15.0985 17.8361 15.0985 18.3182C15.0985 18.8003 15.2731 19.2131 15.6223 19.5564C15.9715 19.8997 16.3914 20.0714 16.8818 20.0714C17.3722 20.0714 17.792 19.8997 18.1412 19.5564C18.4904 19.2131 18.665 18.8003 18.665 18.3182C18.665 17.8361 18.4904 17.4234 18.1412 17.08C17.792 16.7367 17.3722 16.565 16.8818 16.565ZM10.4619 16.565C10.135 16.565 9.83406 16.6454 9.55913 16.8061C9.28421 16.9668 9.06873 17.1787 8.91269 17.4416C8.75665 17.7046 8.67864 17.9968 8.67864 18.3182C8.67864 18.8003 8.85325 19.2131 9.20248 19.5564C9.5517 19.8997 9.97152 20.0714 10.4619 20.0714C10.9523 20.0714 11.3721 19.8997 11.7214 19.5564C12.0706 19.2131 12.2452 18.8003 12.2452 18.3182C12.2452 18.2013 12.2341 18.0845 12.2118 17.9676C12.1895 17.8507 12.156 17.7411 12.1115 17.6389C12.0669 17.5366 12.0112 17.438 11.9443 17.343C11.8774 17.2481 11.8031 17.1604 11.7214 17.08C11.6396 16.9997 11.5505 16.9266 11.4539 16.8609C11.3573 16.7951 11.257 16.7404 11.1529 16.6965C11.0489 16.6527 10.9375 16.6198 10.8186 16.5979C10.6997 16.576 10.5808 16.565 10.4619 16.565Z" fill="#3F4E65" />
                </svg>
            </a>
            <div className="nav__elems">
                <Button styleClass='button__bg-white' picture={<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H6C6.27614 0.5 6.5 0.723858 6.5 1V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V2Z" stroke="#3F4E65" />
                    <path d="M8.5 1C8.5 0.723858 8.72386 0.5 9 0.5H13C13.8284 0.5 14.5 1.17157 14.5 2V6C14.5 6.27614 14.2761 6.5 14 6.5H9C8.72386 6.5 8.5 6.27614 8.5 6V1Z" stroke="#3F4E65" />
                    <path d="M8.5 9C8.5 8.72386 8.72386 8.5 9 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V13C14.5 13.8284 13.8284 14.5 13 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V9Z" stroke="#3F4E65" />
                    <path d="M0.5 9C0.5 8.72386 0.723858 8.5 1 8.5H6C6.27614 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V9Z" stroke="#3F4E65" />
                </svg>} text="Каталог" />
                <label htmlFor="mainSearch" className="nav__label"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.125 13.125L10.3212 10.3162L13.125 13.125ZM11.875 6.5625C11.875 7.97146 11.3153 9.32272 10.319 10.319C9.32272 11.3153 7.97146 11.875 6.5625 11.875C5.15354 11.875 3.80228 11.3153 2.806 10.319C1.80971 9.32272 1.25 7.97146 1.25 6.5625C1.25 5.15354 1.80971 3.80228 2.806 2.806C3.80228 1.80971 5.15354 1.25 6.5625 1.25C7.97146 1.25 9.32272 1.80971 10.319 2.806C11.3153 3.80228 11.875 5.15354 11.875 6.5625V6.5625Z" stroke="#3F4E65" stroke-linecap="round" />
                </svg><input type="search" id="mainSearch" value="Поиск" /></label>

            </div>
        </div>
    )

}

export default Nav;