import { useState, useEffect } from "react";

export default function useDialogShow(initData: boolean, autoShow = true) {
  const [show, setShow] = useState<boolean>(initData);

  useEffect(() => {
    autoShow && setShow(true);
    // eslint-disable-next-line
  }, []);
  return [show, setShow] as const;
}
