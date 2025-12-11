import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'
function ApplyCourse(data){
    axios.post('https://api.innohub.alakbarova.site/api/:id/apply',data)
    toast.success('muracietiniz qebul edildi!')
    return <Toaster/>
}

export {ApplyCourse}