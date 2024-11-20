import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';
import localeData from 'dayjs/plugin/localeData';
import tz from 'dayjs/plugin/timezone';
import 'dayjs/locale/es';

dayjs.locale('es');
dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(localeData);
dayjs.extend(tz);
