import { BiEnvelope, BiMapPin, BiPhone } from 'react-icons/bi';
import ContactForm from './ContactForm';

export default function Footer() {
  return (
    <footer className="pt-20 mt-10 max-w-6xl lg:px-16 px-6 mx-auto">
      <div className="pt-10 grid md:place-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-16">
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-bold tracking-wider mb-2">
            Based in Maseru, Lesotho, but working on projects anywhere!
          </h4>
          <ContactForm />
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-bold tracking-wider text-slate-800 dark:text-whiteColor mb-4">
            Let&apos;s Connect Socially
          </h4>
          <div className="flex gap-4">
            <a
              title="LinkedIn Profile"
              href="https://linkedin.com/in/ntsoereng"
              className=" text-lg dark:text-slate-400 dark:hover:text-firstColor text-slate-700 hover:text-firstColor">
              <span className="sr-only">LinkedIn Profile</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor">
                <circle cx="4.983" cy="5.009" r="2.188" />
                <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
              </svg>
            </a>
            <a
              title="Github Profile"
              href="https://github.com/ntsoereng"
              className=" text-lg dark:text-slate-400 dark:hover:text-firstColor text-slate-700 hover:text-firstColor">
              <span className="sr-only">Github Profile</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                />
              </svg>
            </a>
            <a
              title="Instagram Profile"
              href="https://instagram.com/ntsoereng"
              className=" text-lg dark:text-slate-400 dark:hover:text-firstColor text-slate-700 hover:text-firstColor">
              <span className="sr-only">Instagram Profile</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
                <circle cx="16.806" cy="7.207" r="1.078" />
                <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <h4 className="text-xl font-bold tracking-wider text-slate-800 dark:text-whiteColor mb-4">
              My Contact Info
            </h4>
            <div className="flex gap-4 items-center text-lg mb-4">
              <span className="text-2xl">
                <span className="sr-only">My Location:</span>
                <BiMapPin />
              </span>
              <span>Maseru, Lesotho</span>
            </div>
            <div className="flex gap-4 items-center text-lg mb-4">
              <span className="text-2xl">
                <span className="sr-only">My Email</span>
                <BiEnvelope />
              </span>
              <span>contact@cletusntsoereng.com</span>
            </div>
            <div className="flex gap-4 items-center text-lg mb-4">
              <span className="text-2xl">
                <span className="sr-only">My Telephone</span>
                <BiPhone />
              </span>
              <span>(266) 5754 0890, 6200 1918</span>
            </div>
          </div>
        </div>
      </div>
      <p className="tracking-widest text-slate-400 font-semibold dark:text-slate-500 text-center text-sm py-4">
        Copyright &copy; {new Date().getFullYear()} | Cletus Ntsoereng
      </p>
    </footer>
  );
}
