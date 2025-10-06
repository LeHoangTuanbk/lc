import { minmaxGasDist } from './solution';

describe('minmaxGasDist', () => {
  it('Nên tìm ra khoảng cách tối đa nhỏ nhất là 5.0 khi thêm 3 trạm', () => {
    const stations = [10, 20, 30, 40];
    const K = 3;
    // Giải thích:
    // Các khoảng cách ban đầu là 10, 10, 10.
    // Với K=3, ta có thể thêm 1 trạm vào mỗi khoảng cách để giảm chúng xuống 5.
    // Vị trí mới: 15, 25, 35.
    // Khoảng cách mới: 5, 5, 5, 5, 5, 5. Max là 5.
    const expected = 5.0;

    const result = minmaxGasDist(stations, K);
    // Sử dụng toCloseTo vì kết quả là số thực (floating point)
    expect(result).toBeCloseTo(expected, 4);
  });

  it('Nên xử lý trường hợp thêm nhiều trạm vào khoảng cách lớn', () => {
    const stations = [0, 100];
    const K = 4;
    // Giải thích:
    // Khoảng cách ban đầu là 100.
    // Thêm K=4 trạm sẽ tạo ra 5 phân đoạn. 100 / 5 = 20.
    // Khoảng cách tối đa nhỏ nhất là 20.
    const expected = 20.0;

    const result = minmaxGasDist(stations, K);
    expect(result).toBeCloseTo(expected, 4);
  });

  it('Nên trả về khoảng cách ban đầu nếu K=0', () => {
    const stations = [1, 2, 10];
    const K = 0;
    // Khoảng cách ban đầu: 1 và 8. Max là 8.
    const expected = 8.0;

    const result = minmaxGasDist(stations, K);
    expect(result).toBeCloseTo(expected, 4);
  });

  it('Nên xử lý trường hợp K đủ lớn để tạo ra khoảng cách nhỏ nhất giữa các số thực', () => {
    const stations = [1, 2, 4, 8];
    const K = 10;
    // Khoảng cách ban đầu: 1, 2, 4. Max là 4.
    // Với K=10, ta có thể chia nhỏ rất nhiều.
    // Khoảng cách 1: cần 0.
    // Khoảng cách 2: cần 1 trạm (Max ~ 1).
    // Khoảng cách 4: cần 3 trạm (Max ~ 1).
    // Tổng số trạm cần để đạt D=1 là 0+1+3 = 4. Vì 4 <= K=10, ta có thể đạt D=1.
    // Thử D=0.5:
    // Khoảng cách 1: cần 1.
    // Khoảng cách 2: cần 3.
    // Khoảng cách 4: cần 7.
    // Tổng số trạm cần: 11. Vì 11 > K=10, ta không thể đạt D=0.5.
    // Kết quả tối ưu phải nằm giữa 0.5 và 1. D tối ưu là 4 / (3+1) = 1.0 (vì nó phải lớn hơn 4/(7+1) = 0.5)
    // Trường hợp này kết quả sẽ là D = 4 / (3+1) = 1.0.
    const expected = 4 / 7;

    const result = minmaxGasDist(stations, K);
    expect(result).toBeCloseTo(expected, 4);
  });
});
