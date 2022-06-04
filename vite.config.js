//esmodule 语法
//not commonjs
import { resolve } from 'path'
import { defineConfig } from "vite"
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver, NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import AntoImport from 'unplugin-auto-import/vite'
import { dirResolver,DirResolverHelper } from "vite-auto-import-resolvers"

export default defineConfig({
    resolve:{
        // 设置别名,必须
        alias:{
            '~/':`${resolve(__dirname, 'src')}/`
        }
    },
    plugins:[
        Vue(),
        DirResolverHelper(),
        AntoImport({
            imports: ['vue','vue-router','pinia'],
            resolvers:[
                ElementPlusResolver(),
                dirResolver(),
                dirResolver(
                    {
                        target:'stores',
                    }
                )]
        }),
        Components({
            resolvers: [
                ElementPlusResolver(),
                NaiveUiResolver()
            ]
        })
    ]
})