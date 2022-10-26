export const signal = (
  props: { payload: string; signal },
) => {
  const signal = props.signal.value;
  const setSignal = () => props.signal.value = props.payload;

  return { signal, setSignal };
};
