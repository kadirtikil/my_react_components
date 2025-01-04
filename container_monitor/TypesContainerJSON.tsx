export type Network = {
    Aliases: string[] | null;
    DNSNames: string[] | null;
    DriverOpts: Record<string, string> | null;
    EndpointID: string;
    Gateway: string;
    GlobalIPv6Address: string;
    GlobalIPv6PrefixLen: number;
    IPAMConfig: Record<string, any> | null;
    IPAddress: string;
    IPPrefixLen: number;
    IPv6Gateway: string;
    Links: string[] | null;
    MacAddress: string;
    NetworkID: string;
};

export type NetworkSettings = {
    Networks: {
        [key: string]: Network;
    };
};

export interface ContainerInfo {
    Created: number;
    Command: string;
    HostConfig: {
        NetworkMode: string;
    };
    Image: string;
    Id: string;
    ImageID: string;
    Labels: Record<string, string>;
    Mounts: Array<any>;
    Names: string[];
    NetworkSettings: NetworkSettings;
    Ports: Array<any>;
    State: string;
    Status: string;
};

export const defaultContainerInfo: ContainerInfo = {
    Created: 0,
    Command: "",
    HostConfig: {
        NetworkMode: "",
    },
    Image: "",
    Id: "",
    ImageID: "",
    Labels: {"no": "labels"}, // This should work if Labels is typed correctly
    Mounts: ["empty"],
    Names: ["no", "names"],
    Ports: ["no ports"],
    State: "",
    Status: "",
    NetworkSettings: {
        Networks: {
            "no networks": {
                Aliases: ["no alias"],
                DNSNames: ["no dnsnames"],
                DriverOpts: {"no":"driveropts"},
                EndpointID: "",
                Gateway: "",
                GlobalIPv6Address: "",
                GlobalIPv6PrefixLen: 0,
                IPAMConfig: {"no": "config"},
                IPAddress: "",
                IPPrefixLen: 0,
                IPv6Gateway: "",
                Links: [""],
                MacAddress: "",
                NetworkID: "",
            }
        }
    }
}
