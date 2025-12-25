// import styles from "./ButtonsContainer.module.css";
// const ButtonsContainer= () => {
// return (
//       <div className={styles.buttonContainer}>
//         <button className={style.button}>C</button>
//         <button className={style.button}>A</button>
//         <button className={style.button}>P</button>
//         <button className={style.button}>L</button>
//       </div>
// )
// }
// export default ButtonsContainer;

// import styles from "./ButtonsContainer.module.css";
// const ButtonsContainer = () => {
//     const buttonName = ['C', '1', '2', '3', '4','4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']
//     return (
//         <div className={styles.buttonContainer}>
//             {buttonNames.map(buttonName => {
//                 return (
//                 <button className={styles.button}>button
//                  </button>
//               );
//               }
//             )}


//         </div>
//     );
// };

// export default ButtonsContainer;

import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    'C', '1', '2', '3', '4', '-',
    '5', '6', '*', '7', '8', '/',
    '=', '9', '0', '.','+'
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((buttonName, index) => (
        <button key={index} className={styles.button} onClick={() => onButtonClick(buttonName)}>
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
