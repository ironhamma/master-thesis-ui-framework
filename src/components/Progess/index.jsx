import {
  StyledMeterContainer,
  StyledMeterHigh,
  StyledMeterLow,
  StyledMeterOptimum,
  StyledMeterValue,
  StyledProgressBar,
  StyledProgressContainer,
} from "./styles";

function Progress({
  id,
  height = 40,
  max = 100,
  value = 20,
  low,
  high,
  optimum,
}) {
  if (low && high && optimum) {
    return (
      <StyledMeterContainer id={id} height={height} max={max}>
        <StyledMeterLow low={(low / max) * 100} />
        <StyledMeterHigh high={(high / max) * 100} />
        <StyledMeterOptimum optimum={(optimum / max) * 100} />
        <StyledMeterValue value={(value / max) * 100} />
      </StyledMeterContainer>
    );
  }
  return (
    <StyledProgressContainer id={id} height={height}>
      <StyledProgressBar value={value} max={max} />
    </StyledProgressContainer>
  );
}

export default Progress;
