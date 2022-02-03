
type IUser = {
  email: string,
  role : string,
}

interface Manager {
  username : string
  user ?: IUser
}

interface DataManagerProps {
  data : Manager[]
}


const Table:React.FC<DataManagerProps> = ({ data }) => {

  return <table className="table-auto">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
  </tbody>



  <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Email</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Spent</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Country</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            <tr>
                                
       {data.map((d,i)=> (
          <tr key={d?.user?.email}>
            <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov"/></div>
                    <div className="font-medium text-gray-800">{d.username}</div>
                </div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">{d?.user?.email}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left font-medium text-green-500">{d?.user?.role}</div>
            </td>
          </tr>

        ))
        }
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-lg text-center">🇺🇸</div>
                                </td>
                            </tr>
                          
                        </tbody>
                    </table>
                </div>
            </div>
</table>;
};

export default Table;
