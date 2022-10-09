import { defineComponent, ref, reactive, computed } from 'vue';

interface Commodity {
  name: string;
  num: number;
  price: number;
}

export default defineComponent({
  setup() {
    const commodities = reactive<Commodity[]>([
      {
        name: '健身环',
        price: 100,
        num: 1,
      },
      {
        name: '塞尔达',
        price: 200,
        num: 1,
      },
      {
        name: '星之卡比',
        price: 300,
        num: 1,
      },
      {
        name: '喷射战士',
        price: 500,
        num: 1,
      },
    ]);

    const total = computed<number>(() => {
      return commodities.reduce(
        (prev: number, cur) => prev + cur.num * cur.price,
        0
      );
    });

    const deleteCommodity = (index: number) => {
      commodities.splice(index, 1)
    };

    return () => {
      return (
        <div>
          <table border style='width: 800px' class='table-auto'>
            <thead>
              <tr>
                <th class='px-4 py-2'>名称</th>
                <th class='px-4 py-2'>价格</th>
                <th class='px-4 py-2'>数量</th>
                <th class='px-4 py-2'>操作</th>
              </tr>
            </thead>
            <tbody>
              {commodities.map((item, index) => {
                return (
                  <tr align='center' key={item.name}>
                    <td class='border px-4 py-2'>{item.name}</td>
                    <td class='border px-4 py-2'>{item.price} CNY</td>
                    <td class='border px-4 py-2'>
                      <button
                        onClick={() => {
                          item.num += 1;
                        }}
                        class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'>
                        +
                      </button>
                      <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                        {item.num}
                      </span>
                      <button
                        onClick={() => {
                          item.num -= 1;
                        }}
                        disabled={item.num == 0}
                        class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'>
                        -
                      </button>
                    </td>
                    <td class='border px-4 py-2'>
                      <button onClick={() => deleteCommodity(index)} class='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>
                        删除
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr align='center'>
                <td class='border px-4 py-2'></td>
                <td class='border px-4 py-2'></td>
                <td class='border px-4 py-2'></td>
                <td class='border px-4 py-2'>{total.value} CNY</td>
              </tr>
            </tfoot>
          </table>
        </div>
      );
    };
  },
});
