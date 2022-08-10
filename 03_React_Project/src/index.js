//client 表示在浏览器端
import ReactDOM from 'react-dom/client'

const App = (
    <div>
        <h1>这是一个React项目</h1>
        <p>我终于有了第一个React项目了！</p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(App)
