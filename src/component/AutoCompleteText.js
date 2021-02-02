// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { updateText } from "../reducers/autoComplete";

// const AutoCompleteText = (props) => {
//   const texts = useSelector((state) => state.autoCompleteReducer);
//   const dispatch = useDispatch();

//   console.log(texts);

//   // const

//   return (
//     <div>
//       <input
//         type="text"
//         on
//         onChange={(e) => dispatch(updateText(e.target.value))}
//       />
//       <ul>
//         {/* {Object.entries(texts).foreach((naam) => (
//           <li>
//             <strong></strong> {naam}
//           </li>
//         ))} */}
//         {Object.entries(texts).map([naam, achternaam])}
//         {texts.map((text) => (
//           <li>{text}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AutoCompleteText;
