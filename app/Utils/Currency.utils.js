import { Constants } from '../Constants/Constants';
import { getState } from '../Redux/Store';
import { PlatformConstants } from '../Constants/PlatformConstants';
import { numberWithCommas } from '../Helper/Helper.utils';

const Currency = (number) => {
  const { language: { language } } = getState('language');
  const formattedNumber = numberWithCommas(number);

  if (language === PlatformConstants.LANGUAGE.EN) {
    return `${lang('Idr')} ${formattedNumber.toLocaleString(Constants.LOCALE.EN)}`;
  } else {
    return `${lang('Idr')} ${formattedNumber.toLocaleString(Constants.LOCALE.ID)}`;
  }
};

export { Currency };
