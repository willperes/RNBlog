import {dateUtils} from '../dateUtils';

const CREATED_AT = new Date(2024, 3, 7, 12, 4);
const CREATED_AT_EXPECTED = {
  date: '07/04/2024',
  time: '12:04',
  fullString: '07/04/2024 12:04',
};

const UPDATED_AT = new Date(2024, 3, 8, 14, 35);
const UPDATED_AT_EXPECTED = {
  date: '08/04/2024',
  time: '14:35',
  fullString: '08/04/2024 14:35',
};

const UPDATED_AT_SAME_DAY = new Date(2024, 3, 7, 13, 5);
const UPDATED_AT_SAME_DAY_EXPECTED = {
  date: '07/04/2024',
  time: '13:05',
  fullString: '07/04/2024 13:05',
};

describe('dateUtils', () => {
  describe('formatCreationAndUpdate', () => {
    it('should format the creation date and return updated date as null if both are the same', () => {
      const {createdDateText, updatedDateText} =
        dateUtils.formatCreationAndUpdate(CREATED_AT, CREATED_AT);

      expect(createdDateText).toBe(CREATED_AT_EXPECTED.fullString);
      expect(updatedDateText).toBeNull();
    });

    it('should format both creation date and updated date when they are different', () => {
      const {createdDateText, updatedDateText} =
        dateUtils.formatCreationAndUpdate(CREATED_AT, UPDATED_AT);

      expect(createdDateText).toBe(CREATED_AT_EXPECTED.fullString);
      expect(updatedDateText).toBe(`Updated ${UPDATED_AT_EXPECTED.fullString}`);
    });

    it('should display only the time for the updated date when both dates are in the same day', () => {
      const {createdDateText, updatedDateText} =
        dateUtils.formatCreationAndUpdate(CREATED_AT, UPDATED_AT_SAME_DAY);

      expect(createdDateText).toBe(CREATED_AT_EXPECTED.fullString);
      expect(updatedDateText).toBe(
        `Updated at ${UPDATED_AT_SAME_DAY_EXPECTED.time}`,
      );
    });
  });
});
