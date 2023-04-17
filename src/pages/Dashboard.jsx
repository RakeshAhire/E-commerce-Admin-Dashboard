
import { Flex, Box } from '@chakra-ui/react';
import { BarChart } from '../components/BarChart';
import { CalendarUi } from '../components/CalendarUi';
import { DemoPie } from '../components/PieChart'
import { Stats } from '../components/Stats'
import TodoList from '../components/TodoList';

const Dashboard = () => {
  return (
    <div style={{width:"90%",margin:"auto"}}>
      <Stats />
      <Flex justifyContent="space-between" mt={5} direction={["column","column","row","row"]}>
        <Box w={["90%","100%","68%","68%"]} h={{base:"250px"}}>
          <BarChart />
        </Box>
        <Box w={["90%","80%","28%","28%"]}>
          <DemoPie />
        </Box>
      </Flex>
      <Flex justifyContent="space-between" direction={["column","column","row","row"]} mt={10}>
        <Box w={["100%","100%","50%","50%"]}>
          <TodoList />
        </Box>
        <Box w={["100%","100%","50%","50%"]}>
          <CalendarUi />
        </Box>
      </Flex>

    </div>
  )
}

export default Dashboard;
