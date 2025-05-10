export class Interval {
  start: number;
  end: number;
  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
}

export class Solution {
  /**
   * @param intervals: an array of meeting time intervals
   * @return: if a person could attend all meetings
   */
  canAttendMeetings(intervals: Interval[]): boolean {
    // Nếu không có cuộc họp hoặc chỉ có một cuộc họp, luôn có thể tham dự
    if (intervals.length <= 1) return true;

    // Sắp xếp các khoảng thời gian theo thời gian bắt đầu
    const sortedIntervals = [...intervals].sort((a, b) => a.start - b.start);

    // Kiểm tra chồng chéo giữa các khoảng thời gian liên tiếp
    for (let i = 0; i < sortedIntervals.length - 1; i++) {
      // Nếu thời gian kết thúc của cuộc họp hiện tại lớn hơn thời gian bắt đầu của cuộc họp tiếp theo
      // thì tồn tại chồng chéo và không thể tham dự tất cả các cuộc họp
      if (sortedIntervals[i].end > sortedIntervals[i + 1].start) {
        return false;
      }
    }

    // Không tìm thấy chồng chéo, có thể tham dự tất cả các cuộc họp
    return true;
  }
}
