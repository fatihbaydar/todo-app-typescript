import Swal from "sweetalert2";

//! enum olarak tanımladık ki bizden ne bekliyorsa yanlış yazmayalım diye.
export enum SweetIcon {
  WARNING = "warning",
  ERROR = "error",
  SUCCESS = "success",
  INFO = "info",
  QUESTION = "question",
}
// type Icons = "warning" | "error" |   "success" | "info" | "question"
export const notify = (msg: string, icon:SweetIcon) => {
  Swal.fire({
    title: "Todo App!",
    text: msg,
    icon: icon,
    timer: 3000,
    timerProgressBar: true,
  });
};
