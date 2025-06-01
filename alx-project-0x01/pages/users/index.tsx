import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";


const Users: React.FC< { posts: UserProps[] } > = ({ posts }) => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="p-4">
                <h1 className="text-2xl font-semibold mb-4">Users List</h1>
                <div className="grid grid-cols-2 gap-4">
                    {posts.map((user, key) => (
                        <UserCard key={key} {...user} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;