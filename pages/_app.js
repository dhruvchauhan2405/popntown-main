import "../styles/globals.css";
import { Fragment } from "react";
import Header from "../components/Header";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function App({ Component, pageProps }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Fragment>
        <Header />
        <Component {...pageProps} />
      </Fragment>
    </LocalizationProvider>
  );
}
