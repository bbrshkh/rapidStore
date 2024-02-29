import { useEffect } from "react";
import { useNavigate } from "react-router";

export const Contact = ({loggedIn}) => {
  
  const navigate= useNavigate();
  useEffect(()=> {!loggedIn?navigate('/'):null},[]);
  
  
  return (
    <div className="contact page">
      <h3>Contact page</h3>
      <form>
        <input type="text" placeholder="Name" />
        <input type="tel" placeholder="Phone" />
        <textarea placeholder="Message" rows="3"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};
