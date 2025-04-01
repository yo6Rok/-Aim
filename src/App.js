import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function ClanSite() {
  const [applications, setApplications] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleApply = () => {
    if (name && message) {
      setApplications([...applications, { name, message }]);
      setName("");
      setMessage("");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen p-4 flex flex-col items-center">
      <motion.h1 className="text-4xl font-bold text-red-500 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}> 
        ÿ⁶øŘøķ/Aim Clan
      </motion.h1>
      <Card className="bg-gray-900 p-6 mb-6 w-full max-w-lg">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-4 text-center">Подать заявку</h2>
          <Input className="mb-3 p-2 w-full" placeholder="Ваш ник" value={name} onChange={(e) => setName(e.target.value)} />
          <Input className="mb-3 p-2 w-full" placeholder="Почему хотите вступить?" value={message} onChange={(e) => setMessage(e.target.value)} />
          <Button onClick={handleApply} className="w-full bg-red-500 hover:bg-red-700 p-2">Отправить</Button>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 p-6 w-full max-w-lg">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-4 text-center">Заявки</h2>
          {applications.length === 0 ? (
            <p className="text-gray-400 text-center">Пока нет заявок.</p>
          ) : (
            <ul>
              {applications.map((app, index) => (
                <li key={index} className="border-b border-gray-600 py-2 text-center">
                  <strong>{app.name}:</strong> {app.message}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
