import React from "react";
import "./cookie.css";
import { useState } from "react";

function Cookie() {
  const [renderer, setRenderer] = useState(0);

  const cookieStorage = {
    getItem: (key) => {
      const cookies = document.cookie
        .split(":")
        .map((cookie) => cookie.split("="))
        .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
      /*The key.trim() is used to remove any whitespacesd from the key. */
      /*The { ...acc, [key.trim()]: value } syntax creates a new object by spreading the acc object and adding a new property using computed property names. This syntax allows us to dynamically set the property name based on the key.trim() value. */
      return cookies[key];
    },
    setItem: (key, value) => {
      document.cookie = `${key}=${value}`;
    },
  };
  const storageType = cookieStorage;
  const consentPropertyName = "button_clicked";

  const shouldShowPopup = () =>
    !storageType.getItem(
      consentPropertyName
    ); /*show pop-up only if the key is not present in the storage  */
  const saveToStorage = (value) =>
    storageType.setItem(
      consentPropertyName,
      value
    ); /*sets button_clicked to true */

  window.onload = () => {
    /*execute code onces the page is finished loading */
    if (shouldShowPopup()) {
      /*If the popup should be shown, it retrieves the consent popup element and the accept button using their respective IDs */
      const consentPopup = document.getElementById("consent-popup");
      const acceptBtn = document.getElementById("accept");

      const acceptFn = (event) => {
        /*  called when the accept button is clicked. This function saves data to the storage and hides the popup. */
        saveToStorage(true);
        setRenderer(renderer + 1);
      };

      acceptBtn.addEventListener("click", acceptFn);
      if (shouldShowPopup(storageType)) {
        consentPopup.classList.remove(
          "hidden"
        ); /*it removes the "hidden" class from the consent popup, making it visible to the user. */
      }
    }
  };
  return (
    <>
      {cookieStorage?.getItem(consentPropertyName) === undefined && (
        <div id="consent-popup" className="hidden">
          <p className="style">
            By using this site you agree to our <a href="/">Terms </a>and
            <a href="/"> conditions</a>. Please <a href="/">Accept</a> these
            before using our site.
            <button id="accept" className="acceptcookies">
              Accept All Cookies
            </button>
          </p>
        </div>
      )}
    </>
  );
}

export default Cookie;
