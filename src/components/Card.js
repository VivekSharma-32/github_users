import React from "react";
import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import moment from "moment";

const format = "YYYY-MM-DD";

function Card({ users, error }) {
  return (
    <SimpleGrid m={10} alignItems="center" columns={2} spacing={10}>
      {users
        ? users.map((user) => {
            return (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image src={user.avatar_url} alt="nothing" />

                <Box>
                  <Box
                    mt="1"
                    fontWeight="normal"
                    as="h5"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    Username: {user.login}
                  </Box>
                </Box>
                <Box>
                  <Box
                    mt="1"
                    fontWeight="normal"
                    as="h5"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    Name : {user.name}
                  </Box>
                </Box>
                <Box>
                  <Box
                    mt="1"
                    fontWeight="normal"
                    as="h5"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    No. of public repos: {user.public_repos}
                  </Box>
                </Box>
                <Box>
                  <Box
                    mt="1"
                    fontWeight="normal"
                    as="h5"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    No. of public gists: {user.public_gists}
                  </Box>
                </Box>
                <Box>
                  <Box
                    mt="1"
                    fontWeight="normal"
                    as="h5"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    Profile created at: {moment(format).format(user.created_at)}
                  </Box>
                </Box>
              </Box>
            );
          })
        : error}
    </SimpleGrid>
  );
}

export default Card;
