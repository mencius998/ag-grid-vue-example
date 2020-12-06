import RichGridExample from './rich-grid-example/RichGridExample.vue';
import LargeDataSetExample from './large-data-set-example/LargeDataSetExample.vue';

export default [
    {
        path: '/',
        components: {
            default: RichGridExample
        },
        name: 'Rich Grid 示例'
    },
    { path: '/large-data', component: LargeDataSetExample, name: '大数据量示例' }
];
