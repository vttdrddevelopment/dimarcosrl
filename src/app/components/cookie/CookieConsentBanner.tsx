import React from "react";
import { CookieConsent } from "react-cookie-consent";
import Link from "next/link";

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accetta"
      declineButtonText="Rifiuta"
      enableDeclineButton
      cookieName="dimarcoinfissiCookieConsent"
      style={{ background: "black", color: "#FFF" }}
      buttonStyle={{
        backgroundColor: "#00e46f",
        color: "#FFF",
        fontSize: "14px",
        borderRadius: "10px",
      }}
      declineButtonStyle={{
        backgroundColor: "#f44336",
        color: "#FFF",
        fontSize: "14px",
        borderRadius: "10px",
      }}
      expires={365} // Number of days before the cookie expires
      onAccept={() => {
        // Add functionality when user accepts cookies
        console.log("Cookies accepted");
      }}
      onDecline={() => {
        // Add functionality when user declines cookies
        console.log("Cookies declined");
      }}
    >
      Il sito web utilizza i cookies per migliorare la tua esperienza. Usando il
      nostro sito web, accetti l'utilizzo dei cookies. Scopri di più nella
      nostra <Link href="/privacy-policy" className="hover:underline">
        Privacy Policy
      </Link>
      .
    </CookieConsent>
  );
};

export default CookieConsentBanner;
