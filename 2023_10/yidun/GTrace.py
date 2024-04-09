"""
用于生成坐标轨迹
"""
import math
import random
import matplotlib.pyplot as plt
import numpy as np
import matplotlib as mpl


class GTrace:
    def __init__(self):
        self.__pos_x = []
        self.__pos_y = []
        self.__pos_z = []

    def __set_pt_time(self):
        """
        设置各节点的时间
        分析不同时间间隔中X坐标数量的占比
        统计结果: 1. 80%~90%的X坐标在15~20毫秒之间
                2. 10%~15%在20~200及以上，其中 [-a, 0, x, ...] 这里x只有一个，取值在110~200之间
                    坐标集最后3~5个坐标取值再50~400之间，最后一个坐标数值最大

        滑动总时间的取值规则: 图片宽度260，去掉滑块的宽度剩下200;
                        如果距离小于100，则耗时1300~1900之间
                        如果距离大于100，则耗时1700~2100之间
        """
        __end_pt_time = []
        __move_pt_time = []
        self.__pos_z = []

        total_move_time = self.__need_time * random.uniform(0.8, 0.9)
        start_point_time = 0
        __start_pt_time = [0, 0, int(start_point_time)]

        sum_move_time = 0

        _tmp_total_move_time = total_move_time
        while True:
            delta_time = random.uniform(15, 20)
            if _tmp_total_move_time < delta_time:
                break

            sum_move_time += delta_time
            _tmp_total_move_time -= delta_time
            __move_pt_time.append(int(start_point_time+sum_move_time))

        last_pt_time = __move_pt_time[-1]
        __move_pt_time.append(last_pt_time+_tmp_total_move_time)

        sum_end_time = start_point_time + total_move_time
        other_point_time = self.__need_time - sum_end_time
        end_first_ptime = other_point_time / 2

        while True:
            delta_time = random.uniform(110, 200)
            if end_first_ptime - delta_time <= 0:
                break

            end_first_ptime -= delta_time
            sum_end_time += delta_time
            __end_pt_time.append(int(sum_end_time))

        __end_pt_time.append(int(sum_end_time + (other_point_time/2 + end_first_ptime)))
        # self.__pos_z.extend(__start_pt_time)
        self.__pos_z.extend(__move_pt_time)
        self.__pos_z.extend(__end_pt_time)

    def __set_distance(self, _dist):
        """
        设置要生成的轨迹长度
        """
        self.__distance = _dist

        if _dist < 100:
            self.__need_time = int(random.uniform(500, 1500))
        else:
            self.__need_time = int(random.uniform(1000, 2000))

    def __get_pos_z(self):
        return self.__pos_z

    def __get_pos_y(self):
        _pos_y = []
        point_count = len(self.__pos_z)
        x = np.linspace(-10, 15, point_count - len(_pos_y))
        arct_y = np.arctan(x)

        for _, val in enumerate(arct_y):
            _pos_y.append(val)

        return _pos_y

    def __get_pos_x(self, _distance):
        """
        绘制标准的数学函数图像: 以 tanh 开始 以 arctan 结尾
        根据此模型用等比时间差生成X坐标
        """
        # first_val = random.uniform(-40, -18)
        # _distance += first_val
        # _pos_x = [random.uniform(-40, -18), 0]
        _pos_x = []
        self.__set_distance(_distance)
        self.__set_pt_time()

        point_count = len(self.__pos_z)
        x = np.linspace(-1, 19, point_count-len(_pos_x))
        ss = np.arctan(x)
        th = np.tanh(x)

        for idx in range(0, len(th)):
            if th[idx] < ss[idx]:
                th[idx] = ss[idx]

        th += 1
        th *= (_distance / 2.5)

        i = 0
        start_idx = int(point_count/10)
        end_idx = int(point_count/50)
        delta_pt = abs(np.random.normal(scale=1.1, size=point_count-start_idx-end_idx))
        for idx in range(start_idx, point_count):
            if idx*1.3 > len(delta_pt):
                break

            th[idx] += delta_pt[i]
            i+=1

        _pos_x.extend(th)
        return _pos_x[-1], _pos_x

    def get_mouse_pos_path(self, distance):
        """
        获取滑动滑块鼠标的滑动轨迹坐标集合
        """
        result = []
        _distance, x = self.__get_pos_x(distance)
        y = self.__get_pos_y()
        z = self.__get_pos_z()

        for idx in range(len(x)):
            result.append([int(x[idx]), int(y[idx]), int(z[idx])])

        return int(_distance), result


if __name__ == "__main__":
    _color = ["blue", "green", "red", "cyan", "magenta"]
    trace = GTrace()
    distance , res = trace.get_mouse_pos_path(100)
    print(distance)
    print(res)
    # for idx in range(0, 10):
    # distance = random.uniform(70, 150)
    # print("长度为: %d , 坐标为: \n" % distance)
    # distance, mouse_pos_path = trace.get_mouse_pos_path(distance)
    # print("长度为: %d , 坐标为: \" % distance, mouse_pos_path)
