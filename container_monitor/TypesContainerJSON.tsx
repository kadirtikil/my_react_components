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
    Command: string;
    Created: number;
    HostConfig: {
        NetworkMode: string;
    };
    Id: string;
    Image: string;
    ImageID: string;
    Labels: Record<string, string>;
    Mounts: Array<any>;
    Names: string[];
    NetworkSettings: NetworkSettings;
    Ports: Array<any>;
    State: string;
    Status: string;
};
