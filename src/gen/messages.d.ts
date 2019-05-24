import * as $protobuf from "protobufjs";
/** Namespace gauge. */
export namespace gauge {

    /** Namespace messages. */
    namespace messages {

        /** Properties of a GetProjectRootRequest. */
        interface IGetProjectRootRequest {
        }

        /** Request to get the Root Directory of the project */
        class GetProjectRootRequest implements IGetProjectRootRequest {

            /**
             * Constructs a new GetProjectRootRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IGetProjectRootRequest);

            /**
             * Creates a new GetProjectRootRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetProjectRootRequest instance
             */
            public static create(properties?: gauge.messages.IGetProjectRootRequest): gauge.messages.GetProjectRootRequest;

            /**
             * Encodes the specified GetProjectRootRequest message. Does not implicitly {@link gauge.messages.GetProjectRootRequest.verify|verify} messages.
             * @param message GetProjectRootRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IGetProjectRootRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetProjectRootRequest message, length delimited. Does not implicitly {@link gauge.messages.GetProjectRootRequest.verify|verify} messages.
             * @param message GetProjectRootRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IGetProjectRootRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetProjectRootRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetProjectRootRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.GetProjectRootRequest;

            /**
             * Decodes a GetProjectRootRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetProjectRootRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.GetProjectRootRequest;

            /**
             * Verifies a GetProjectRootRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetProjectRootRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetProjectRootRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.GetProjectRootRequest;

            /**
             * Creates a plain object from a GetProjectRootRequest message. Also converts values to other types if specified.
             * @param message GetProjectRootRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.GetProjectRootRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetProjectRootRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetProjectRootResponse. */
        interface IGetProjectRootResponse {

            /** Holds the absolute path of the Project Root directory. */
            projectRoot?: (string|null);
        }

        /** Response of GetProjectRootRequest. */
        class GetProjectRootResponse implements IGetProjectRootResponse {

            /**
             * Constructs a new GetProjectRootResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IGetProjectRootResponse);

            /** Holds the absolute path of the Project Root directory. */
            public projectRoot: string;

            /**
             * Creates a new GetProjectRootResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetProjectRootResponse instance
             */
            public static create(properties?: gauge.messages.IGetProjectRootResponse): gauge.messages.GetProjectRootResponse;

            /**
             * Encodes the specified GetProjectRootResponse message. Does not implicitly {@link gauge.messages.GetProjectRootResponse.verify|verify} messages.
             * @param message GetProjectRootResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IGetProjectRootResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetProjectRootResponse message, length delimited. Does not implicitly {@link gauge.messages.GetProjectRootResponse.verify|verify} messages.
             * @param message GetProjectRootResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IGetProjectRootResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetProjectRootResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetProjectRootResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.GetProjectRootResponse;

            /**
             * Decodes a GetProjectRootResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetProjectRootResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.GetProjectRootResponse;

            /**
             * Verifies a GetProjectRootResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetProjectRootResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetProjectRootResponse
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.GetProjectRootResponse;

            /**
             * Creates a plain object from a GetProjectRootResponse message. Also converts values to other types if specified.
             * @param message GetProjectRootResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.GetProjectRootResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetProjectRootResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetInstallationRootRequest. */
        interface IGetInstallationRootRequest {
        }

        /** Request to get the Root Directory of the Gauge installation */
        class GetInstallationRootRequest implements IGetInstallationRootRequest {

            /**
             * Constructs a new GetInstallationRootRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IGetInstallationRootRequest);

            /**
             * Creates a new GetInstallationRootRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetInstallationRootRequest instance
             */
            public static create(properties?: gauge.messages.IGetInstallationRootRequest): gauge.messages.GetInstallationRootRequest;

            /**
             * Encodes the specified GetInstallationRootRequest message. Does not implicitly {@link gauge.messages.GetInstallationRootRequest.verify|verify} messages.
             * @param message GetInstallationRootRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IGetInstallationRootRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetInstallationRootRequest message, length delimited. Does not implicitly {@link gauge.messages.GetInstallationRootRequest.verify|verify} messages.
             * @param message GetInstallationRootRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IGetInstallationRootRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetInstallationRootRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetInstallationRootRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.GetInstallationRootRequest;

            /**
             * Decodes a GetInstallationRootRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetInstallationRootRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.GetInstallationRootRequest;

            /**
             * Verifies a GetInstallationRootRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetInstallationRootRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetInstallationRootRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.GetInstallationRootRequest;

            /**
             * Creates a plain object from a GetInstallationRootRequest message. Also converts values to other types if specified.
             * @param message GetInstallationRootRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.GetInstallationRootRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetInstallationRootRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetInstallationRootResponse. */
        interface IGetInstallationRootResponse {

            /** Holds the absolute path of the Gauge installation directory */
            installationRoot?: (string|null);
        }

        /** Response of GetInstallationRootRequest */
        class GetInstallationRootResponse implements IGetInstallationRootResponse {

            /**
             * Constructs a new GetInstallationRootResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IGetInstallationRootResponse);

            /** Holds the absolute path of the Gauge installation directory */
            public installationRoot: string;

            /**
             * Creates a new GetInstallationRootResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetInstallationRootResponse instance
             */
            public static create(properties?: gauge.messages.IGetInstallationRootResponse): gauge.messages.GetInstallationRootResponse;

            /**
             * Encodes the specified GetInstallationRootResponse message. Does not implicitly {@link gauge.messages.GetInstallationRootResponse.verify|verify} messages.
             * @param message GetInstallationRootResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IGetInstallationRootResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetInstallationRootResponse message, length delimited. Does not implicitly {@link gauge.messages.GetInstallationRootResponse.verify|verify} messages.
             * @param message GetInstallationRootResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IGetInstallationRootResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetInstallationRootResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetInstallationRootResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.GetInstallationRootResponse;

            /**
             * Decodes a GetInstallationRootResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetInstallationRootResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.GetInstallationRootResponse;

            /**
             * Verifies a GetInstallationRootResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetInstallationRootResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetInstallationRootResponse
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.GetInstallationRootResponse;

            /**
             * Creates a plain object from a GetInstallationRootResponse message. Also converts values to other types if specified.
             * @param message GetInstallationRootResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.GetInstallationRootResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetInstallationRootResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetAllStepsRequest. */
        interface IGetAllStepsRequest {
        }

        /** Request to get all Steps in the project */
        class GetAllStepsRequest implements IGetAllStepsRequest {

            /**
             * Constructs a new GetAllStepsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IGetAllStepsRequest);

            /**
             * Creates a new GetAllStepsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetAllStepsRequest instance
             */
            public static create(properties?: gauge.messages.IGetAllStepsRequest): gauge.messages.GetAllStepsRequest;

            /**
             * Encodes the specified GetAllStepsRequest message. Does not implicitly {@link gauge.messages.GetAllStepsRequest.verify|verify} messages.
             * @param message GetAllStepsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IGetAllStepsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetAllStepsRequest message, length delimited. Does not implicitly {@link gauge.messages.GetAllStepsRequest.verify|verify} messages.
             * @param message GetAllStepsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IGetAllStepsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetAllStepsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetAllStepsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.GetAllStepsRequest;

            /**
             * Decodes a GetAllStepsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetAllStepsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.GetAllStepsRequest;

            /**
             * Verifies a GetAllStepsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetAllStepsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetAllStepsRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.GetAllStepsRequest;

            /**
             * Creates a plain object from a GetAllStepsRequest message. Also converts values to other types if specified.
             * @param message GetAllStepsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.GetAllStepsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetAllStepsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetAllStepsResponse. */
        interface IGetAllStepsResponse {

            /** Holds a collection of Steps that are defined in the project. */
            allSteps?: (gauge.messages.IProtoStepValue[]|null);
        }

        /** Response to GetAllStepsRequest */
        class GetAllStepsResponse implements IGetAllStepsResponse {

            /**
             * Constructs a new GetAllStepsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IGetAllStepsResponse);

            /** Holds a collection of Steps that are defined in the project. */
            public allSteps: gauge.messages.IProtoStepValue[];

            /**
             * Creates a new GetAllStepsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetAllStepsResponse instance
             */
            public static create(properties?: gauge.messages.IGetAllStepsResponse): gauge.messages.GetAllStepsResponse;

            /**
             * Encodes the specified GetAllStepsResponse message. Does not implicitly {@link gauge.messages.GetAllStepsResponse.verify|verify} messages.
             * @param message GetAllStepsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IGetAllStepsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetAllStepsResponse message, length delimited. Does not implicitly {@link gauge.messages.GetAllStepsResponse.verify|verify} messages.
             * @param message GetAllStepsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IGetAllStepsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetAllStepsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetAllStepsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.GetAllStepsResponse;

            /**
             * Decodes a GetAllStepsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetAllStepsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.GetAllStepsResponse;

            /**
             * Verifies a GetAllStepsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetAllStepsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetAllStepsResponse
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.GetAllStepsResponse;

            /**
             * Creates a plain object from a GetAllStepsResponse message. Also converts values to other types if specified.
             * @param message GetAllStepsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.GetAllStepsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetAllStepsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SpecsRequest. */
        interface ISpecsRequest {

            /** SpecsRequest specs */
            specs?: (string[]|null);
        }

        /** Request to get all Specs in the project */
        class SpecsRequest implements ISpecsRequest {

            /**
             * Constructs a new SpecsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.ISpecsRequest);

            /** SpecsRequest specs. */
            public specs: string[];

            /**
             * Creates a new SpecsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SpecsRequest instance
             */
            public static create(properties?: gauge.messages.ISpecsRequest): gauge.messages.SpecsRequest;

            /**
             * Encodes the specified SpecsRequest message. Does not implicitly {@link gauge.messages.SpecsRequest.verify|verify} messages.
             * @param message SpecsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.ISpecsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SpecsRequest message, length delimited. Does not implicitly {@link gauge.messages.SpecsRequest.verify|verify} messages.
             * @param message SpecsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.ISpecsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SpecsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SpecsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.SpecsRequest;

            /**
             * Decodes a SpecsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SpecsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.SpecsRequest;

            /**
             * Verifies a SpecsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SpecsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SpecsRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.SpecsRequest;

            /**
             * Creates a plain object from a SpecsRequest message. Also converts values to other types if specified.
             * @param message SpecsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.SpecsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SpecsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SpecsResponse. */
        interface ISpecsResponse {

            /** Holds a collection of Spec details. */
            details?: (gauge.messages.SpecsResponse.ISpecDetail[]|null);
        }

        /** Response to GetAllSpecsRequest */
        class SpecsResponse implements ISpecsResponse {

            /**
             * Constructs a new SpecsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.ISpecsResponse);

            /** Holds a collection of Spec details. */
            public details: gauge.messages.SpecsResponse.ISpecDetail[];

            /**
             * Creates a new SpecsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SpecsResponse instance
             */
            public static create(properties?: gauge.messages.ISpecsResponse): gauge.messages.SpecsResponse;

            /**
             * Encodes the specified SpecsResponse message. Does not implicitly {@link gauge.messages.SpecsResponse.verify|verify} messages.
             * @param message SpecsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.ISpecsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SpecsResponse message, length delimited. Does not implicitly {@link gauge.messages.SpecsResponse.verify|verify} messages.
             * @param message SpecsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.ISpecsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SpecsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SpecsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.SpecsResponse;

            /**
             * Decodes a SpecsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SpecsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.SpecsResponse;

            /**
             * Verifies a SpecsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SpecsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SpecsResponse
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.SpecsResponse;

            /**
             * Creates a plain object from a SpecsResponse message. Also converts values to other types if specified.
             * @param message SpecsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.SpecsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SpecsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SpecsResponse {

            /** Properties of a SpecDetail. */
            interface ISpecDetail {

                /** Holds a collection of Specs that are defined in the project. */
                spec?: (gauge.messages.IProtoSpec|null);

                /** Holds a collection of parse errors present in the above spec. */
                parseErrors?: (gauge.messages.IError[]|null);
            }

            /** Represents a SpecDetail. */
            class SpecDetail implements ISpecDetail {

                /**
                 * Constructs a new SpecDetail.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: gauge.messages.SpecsResponse.ISpecDetail);

                /** Holds a collection of Specs that are defined in the project. */
                public spec?: (gauge.messages.IProtoSpec|null);

                /** Holds a collection of parse errors present in the above spec. */
                public parseErrors: gauge.messages.IError[];

                /**
                 * Creates a new SpecDetail instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SpecDetail instance
                 */
                public static create(properties?: gauge.messages.SpecsResponse.ISpecDetail): gauge.messages.SpecsResponse.SpecDetail;

                /**
                 * Encodes the specified SpecDetail message. Does not implicitly {@link gauge.messages.SpecsResponse.SpecDetail.verify|verify} messages.
                 * @param message SpecDetail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: gauge.messages.SpecsResponse.ISpecDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SpecDetail message, length delimited. Does not implicitly {@link gauge.messages.SpecsResponse.SpecDetail.verify|verify} messages.
                 * @param message SpecDetail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: gauge.messages.SpecsResponse.ISpecDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SpecDetail message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SpecDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.SpecsResponse.SpecDetail;

                /**
                 * Decodes a SpecDetail message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SpecDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.SpecsResponse.SpecDetail;

                /**
                 * Verifies a SpecDetail message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SpecDetail message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SpecDetail
                 */
                public static fromObject(object: { [k: string]: any }): gauge.messages.SpecsResponse.SpecDetail;

                /**
                 * Creates a plain object from a SpecDetail message. Also converts values to other types if specified.
                 * @param message SpecDetail
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: gauge.messages.SpecsResponse.SpecDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SpecDetail to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GetAllConceptsRequest. */
        interface IGetAllConceptsRequest {
        }

        /** Request to get all Concepts in the project */
        class GetAllConceptsRequest implements IGetAllConceptsRequest {

            /**
             * Constructs a new GetAllConceptsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IGetAllConceptsRequest);

            /**
             * Creates a new GetAllConceptsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetAllConceptsRequest instance
             */
            public static create(properties?: gauge.messages.IGetAllConceptsRequest): gauge.messages.GetAllConceptsRequest;

            /**
             * Encodes the specified GetAllConceptsRequest message. Does not implicitly {@link gauge.messages.GetAllConceptsRequest.verify|verify} messages.
             * @param message GetAllConceptsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IGetAllConceptsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetAllConceptsRequest message, length delimited. Does not implicitly {@link gauge.messages.GetAllConceptsRequest.verify|verify} messages.
             * @param message GetAllConceptsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IGetAllConceptsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetAllConceptsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetAllConceptsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.GetAllConceptsRequest;

            /**
             * Decodes a GetAllConceptsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetAllConceptsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.GetAllConceptsRequest;

            /**
             * Verifies a GetAllConceptsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetAllConceptsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetAllConceptsRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.GetAllConceptsRequest;

            /**
             * Creates a plain object from a GetAllConceptsRequest message. Also converts values to other types if specified.
             * @param message GetAllConceptsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.GetAllConceptsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetAllConceptsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetAllConceptsResponse. */
        interface IGetAllConceptsResponse {

            /** Holds a collection of Concepts that are defined in the project. */
            concepts?: (gauge.messages.IConceptInfo[]|null);
        }

        /** Response to GetAllConceptsResponse */
        class GetAllConceptsResponse implements IGetAllConceptsResponse {

            /**
             * Constructs a new GetAllConceptsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IGetAllConceptsResponse);

            /** Holds a collection of Concepts that are defined in the project. */
            public concepts: gauge.messages.IConceptInfo[];

            /**
             * Creates a new GetAllConceptsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetAllConceptsResponse instance
             */
            public static create(properties?: gauge.messages.IGetAllConceptsResponse): gauge.messages.GetAllConceptsResponse;

            /**
             * Encodes the specified GetAllConceptsResponse message. Does not implicitly {@link gauge.messages.GetAllConceptsResponse.verify|verify} messages.
             * @param message GetAllConceptsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IGetAllConceptsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetAllConceptsResponse message, length delimited. Does not implicitly {@link gauge.messages.GetAllConceptsResponse.verify|verify} messages.
             * @param message GetAllConceptsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IGetAllConceptsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetAllConceptsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetAllConceptsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.GetAllConceptsResponse;

            /**
             * Decodes a GetAllConceptsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetAllConceptsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.GetAllConceptsResponse;

            /**
             * Verifies a GetAllConceptsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetAllConceptsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetAllConceptsResponse
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.GetAllConceptsResponse;

            /**
             * Creates a plain object from a GetAllConceptsResponse message. Also converts values to other types if specified.
             * @param message GetAllConceptsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.GetAllConceptsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetAllConceptsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ConceptInfo. */
        interface IConceptInfo {

            /** The text that defines a concept */
            stepValue?: (gauge.messages.IProtoStepValue|null);

            /** The absolute path to the file that contains the Concept */
            filepath?: (string|null);

            /** The line number in the file where the concept is defined. */
            lineNumber?: (number|null);
        }

        /** Details of a Concept */
        class ConceptInfo implements IConceptInfo {

            /**
             * Constructs a new ConceptInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IConceptInfo);

            /** The text that defines a concept */
            public stepValue?: (gauge.messages.IProtoStepValue|null);

            /** The absolute path to the file that contains the Concept */
            public filepath: string;

            /** The line number in the file where the concept is defined. */
            public lineNumber: number;

            /**
             * Creates a new ConceptInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConceptInfo instance
             */
            public static create(properties?: gauge.messages.IConceptInfo): gauge.messages.ConceptInfo;

            /**
             * Encodes the specified ConceptInfo message. Does not implicitly {@link gauge.messages.ConceptInfo.verify|verify} messages.
             * @param message ConceptInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IConceptInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConceptInfo message, length delimited. Does not implicitly {@link gauge.messages.ConceptInfo.verify|verify} messages.
             * @param message ConceptInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IConceptInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConceptInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConceptInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ConceptInfo;

            /**
             * Decodes a ConceptInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConceptInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ConceptInfo;

            /**
             * Verifies a ConceptInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConceptInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConceptInfo
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ConceptInfo;

            /**
             * Creates a plain object from a ConceptInfo message. Also converts values to other types if specified.
             * @param message ConceptInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ConceptInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConceptInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetStepValueRequest. */
        interface IGetStepValueRequest {

            /** The text of the Step. */
            stepText?: (string|null);

            /** Flag to indicate if the Step has an inline table. */
            hasInlineTable?: (boolean|null);
        }

        /** Request to get a Step Value. */
        class GetStepValueRequest implements IGetStepValueRequest {

            /**
             * Constructs a new GetStepValueRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IGetStepValueRequest);

            /** The text of the Step. */
            public stepText: string;

            /** Flag to indicate if the Step has an inline table. */
            public hasInlineTable: boolean;

            /**
             * Creates a new GetStepValueRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetStepValueRequest instance
             */
            public static create(properties?: gauge.messages.IGetStepValueRequest): gauge.messages.GetStepValueRequest;

            /**
             * Encodes the specified GetStepValueRequest message. Does not implicitly {@link gauge.messages.GetStepValueRequest.verify|verify} messages.
             * @param message GetStepValueRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IGetStepValueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetStepValueRequest message, length delimited. Does not implicitly {@link gauge.messages.GetStepValueRequest.verify|verify} messages.
             * @param message GetStepValueRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IGetStepValueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetStepValueRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetStepValueRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.GetStepValueRequest;

            /**
             * Decodes a GetStepValueRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetStepValueRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.GetStepValueRequest;

            /**
             * Verifies a GetStepValueRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetStepValueRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetStepValueRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.GetStepValueRequest;

            /**
             * Creates a plain object from a GetStepValueRequest message. Also converts values to other types if specified.
             * @param message GetStepValueRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.GetStepValueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetStepValueRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetStepValueResponse. */
        interface IGetStepValueResponse {

            /** The Step corresponding to the request provided. */
            stepValue?: (gauge.messages.IProtoStepValue|null);
        }

        /** Response to GetStepValueRequest */
        class GetStepValueResponse implements IGetStepValueResponse {

            /**
             * Constructs a new GetStepValueResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IGetStepValueResponse);

            /** The Step corresponding to the request provided. */
            public stepValue?: (gauge.messages.IProtoStepValue|null);

            /**
             * Creates a new GetStepValueResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetStepValueResponse instance
             */
            public static create(properties?: gauge.messages.IGetStepValueResponse): gauge.messages.GetStepValueResponse;

            /**
             * Encodes the specified GetStepValueResponse message. Does not implicitly {@link gauge.messages.GetStepValueResponse.verify|verify} messages.
             * @param message GetStepValueResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IGetStepValueResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetStepValueResponse message, length delimited. Does not implicitly {@link gauge.messages.GetStepValueResponse.verify|verify} messages.
             * @param message GetStepValueResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IGetStepValueResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetStepValueResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetStepValueResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.GetStepValueResponse;

            /**
             * Decodes a GetStepValueResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetStepValueResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.GetStepValueResponse;

            /**
             * Verifies a GetStepValueResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetStepValueResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetStepValueResponse
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.GetStepValueResponse;

            /**
             * Creates a plain object from a GetStepValueResponse message. Also converts values to other types if specified.
             * @param message GetStepValueResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.GetStepValueResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetStepValueResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetLanguagePluginLibPathRequest. */
        interface IGetLanguagePluginLibPathRequest {

            /** The language to locate the lib directory for. */
            language?: (string|null);
        }

        /** Request to get the location of language plugin's Lib directory */
        class GetLanguagePluginLibPathRequest implements IGetLanguagePluginLibPathRequest {

            /**
             * Constructs a new GetLanguagePluginLibPathRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IGetLanguagePluginLibPathRequest);

            /** The language to locate the lib directory for. */
            public language: string;

            /**
             * Creates a new GetLanguagePluginLibPathRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetLanguagePluginLibPathRequest instance
             */
            public static create(properties?: gauge.messages.IGetLanguagePluginLibPathRequest): gauge.messages.GetLanguagePluginLibPathRequest;

            /**
             * Encodes the specified GetLanguagePluginLibPathRequest message. Does not implicitly {@link gauge.messages.GetLanguagePluginLibPathRequest.verify|verify} messages.
             * @param message GetLanguagePluginLibPathRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IGetLanguagePluginLibPathRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetLanguagePluginLibPathRequest message, length delimited. Does not implicitly {@link gauge.messages.GetLanguagePluginLibPathRequest.verify|verify} messages.
             * @param message GetLanguagePluginLibPathRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IGetLanguagePluginLibPathRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetLanguagePluginLibPathRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetLanguagePluginLibPathRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.GetLanguagePluginLibPathRequest;

            /**
             * Decodes a GetLanguagePluginLibPathRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetLanguagePluginLibPathRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.GetLanguagePluginLibPathRequest;

            /**
             * Verifies a GetLanguagePluginLibPathRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetLanguagePluginLibPathRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetLanguagePluginLibPathRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.GetLanguagePluginLibPathRequest;

            /**
             * Creates a plain object from a GetLanguagePluginLibPathRequest message. Also converts values to other types if specified.
             * @param message GetLanguagePluginLibPathRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.GetLanguagePluginLibPathRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetLanguagePluginLibPathRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetLanguagePluginLibPathResponse. */
        interface IGetLanguagePluginLibPathResponse {

            /** Absolute path to the Lib directory of the language. */
            path?: (string|null);
        }

        /** Response to GetLanguagePluginLibPathRequest */
        class GetLanguagePluginLibPathResponse implements IGetLanguagePluginLibPathResponse {

            /**
             * Constructs a new GetLanguagePluginLibPathResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IGetLanguagePluginLibPathResponse);

            /** Absolute path to the Lib directory of the language. */
            public path: string;

            /**
             * Creates a new GetLanguagePluginLibPathResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetLanguagePluginLibPathResponse instance
             */
            public static create(properties?: gauge.messages.IGetLanguagePluginLibPathResponse): gauge.messages.GetLanguagePluginLibPathResponse;

            /**
             * Encodes the specified GetLanguagePluginLibPathResponse message. Does not implicitly {@link gauge.messages.GetLanguagePluginLibPathResponse.verify|verify} messages.
             * @param message GetLanguagePluginLibPathResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IGetLanguagePluginLibPathResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetLanguagePluginLibPathResponse message, length delimited. Does not implicitly {@link gauge.messages.GetLanguagePluginLibPathResponse.verify|verify} messages.
             * @param message GetLanguagePluginLibPathResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IGetLanguagePluginLibPathResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetLanguagePluginLibPathResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetLanguagePluginLibPathResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.GetLanguagePluginLibPathResponse;

            /**
             * Decodes a GetLanguagePluginLibPathResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetLanguagePluginLibPathResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.GetLanguagePluginLibPathResponse;

            /**
             * Verifies a GetLanguagePluginLibPathResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetLanguagePluginLibPathResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetLanguagePluginLibPathResponse
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.GetLanguagePluginLibPathResponse;

            /**
             * Creates a plain object from a GetLanguagePluginLibPathResponse message. Also converts values to other types if specified.
             * @param message GetLanguagePluginLibPathResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.GetLanguagePluginLibPathResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetLanguagePluginLibPathResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ErrorResponse. */
        interface IErrorResponse {

            /** Actual error message */
            error?: (string|null);
        }

        /** A generic failure response */
        class ErrorResponse implements IErrorResponse {

            /**
             * Constructs a new ErrorResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IErrorResponse);

            /** Actual error message */
            public error: string;

            /**
             * Creates a new ErrorResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ErrorResponse instance
             */
            public static create(properties?: gauge.messages.IErrorResponse): gauge.messages.ErrorResponse;

            /**
             * Encodes the specified ErrorResponse message. Does not implicitly {@link gauge.messages.ErrorResponse.verify|verify} messages.
             * @param message ErrorResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IErrorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ErrorResponse message, length delimited. Does not implicitly {@link gauge.messages.ErrorResponse.verify|verify} messages.
             * @param message ErrorResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IErrorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ErrorResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ErrorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ErrorResponse;

            /**
             * Decodes an ErrorResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ErrorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ErrorResponse;

            /**
             * Verifies an ErrorResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ErrorResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ErrorResponse
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ErrorResponse;

            /**
             * Creates a plain object from an ErrorResponse message. Also converts values to other types if specified.
             * @param message ErrorResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ErrorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ErrorResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PerformRefactoringRequest. */
        interface IPerformRefactoringRequest {

            /** Step to refactor */
            oldStep?: (string|null);

            /** Change to be made */
            newStep?: (string|null);
        }

        /** Request to perform a Refactor */
        class PerformRefactoringRequest implements IPerformRefactoringRequest {

            /**
             * Constructs a new PerformRefactoringRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IPerformRefactoringRequest);

            /** Step to refactor */
            public oldStep: string;

            /** Change to be made */
            public newStep: string;

            /**
             * Creates a new PerformRefactoringRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PerformRefactoringRequest instance
             */
            public static create(properties?: gauge.messages.IPerformRefactoringRequest): gauge.messages.PerformRefactoringRequest;

            /**
             * Encodes the specified PerformRefactoringRequest message. Does not implicitly {@link gauge.messages.PerformRefactoringRequest.verify|verify} messages.
             * @param message PerformRefactoringRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IPerformRefactoringRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PerformRefactoringRequest message, length delimited. Does not implicitly {@link gauge.messages.PerformRefactoringRequest.verify|verify} messages.
             * @param message PerformRefactoringRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IPerformRefactoringRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PerformRefactoringRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PerformRefactoringRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.PerformRefactoringRequest;

            /**
             * Decodes a PerformRefactoringRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PerformRefactoringRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.PerformRefactoringRequest;

            /**
             * Verifies a PerformRefactoringRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PerformRefactoringRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PerformRefactoringRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.PerformRefactoringRequest;

            /**
             * Creates a plain object from a PerformRefactoringRequest message. Also converts values to other types if specified.
             * @param message PerformRefactoringRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.PerformRefactoringRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PerformRefactoringRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PerformRefactoringResponse. */
        interface IPerformRefactoringResponse {

            /** Flag indicating Success */
            success?: (boolean|null);

            /** Error message if the refactoring was unsuccessful. */
            errors?: (string[]|null);

            /** Collection of files that were changed as part of the Refactoring. */
            filesChanged?: (string[]|null);
        }

        /** Response to PerformRefactoringRequest */
        class PerformRefactoringResponse implements IPerformRefactoringResponse {

            /**
             * Constructs a new PerformRefactoringResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IPerformRefactoringResponse);

            /** Flag indicating Success */
            public success: boolean;

            /** Error message if the refactoring was unsuccessful. */
            public errors: string[];

            /** Collection of files that were changed as part of the Refactoring. */
            public filesChanged: string[];

            /**
             * Creates a new PerformRefactoringResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PerformRefactoringResponse instance
             */
            public static create(properties?: gauge.messages.IPerformRefactoringResponse): gauge.messages.PerformRefactoringResponse;

            /**
             * Encodes the specified PerformRefactoringResponse message. Does not implicitly {@link gauge.messages.PerformRefactoringResponse.verify|verify} messages.
             * @param message PerformRefactoringResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IPerformRefactoringResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PerformRefactoringResponse message, length delimited. Does not implicitly {@link gauge.messages.PerformRefactoringResponse.verify|verify} messages.
             * @param message PerformRefactoringResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IPerformRefactoringResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PerformRefactoringResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PerformRefactoringResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.PerformRefactoringResponse;

            /**
             * Decodes a PerformRefactoringResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PerformRefactoringResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.PerformRefactoringResponse;

            /**
             * Verifies a PerformRefactoringResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PerformRefactoringResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PerformRefactoringResponse
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.PerformRefactoringResponse;

            /**
             * Creates a plain object from a PerformRefactoringResponse message. Also converts values to other types if specified.
             * @param message PerformRefactoringResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.PerformRefactoringResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PerformRefactoringResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExtractConceptRequest. */
        interface IExtractConceptRequest {

            /** The Concept name given by the user */
            conceptName?: (gauge.messages.Istep|null);

            /** steps to extract */
            steps?: (gauge.messages.Istep[]|null);

            /** Flag indicating if refactoring should be done across project */
            changeAcrossProject?: (boolean|null);

            /** The concept filename in which extracted concept will be added */
            conceptFileName?: (string|null);

            /** Info related to selected text, only if changeAcrossProject is false */
            selectedTextInfo?: (gauge.messages.ItextInfo|null);
        }

        /** Request to perform Extract to Concept refactoring */
        class ExtractConceptRequest implements IExtractConceptRequest {

            /**
             * Constructs a new ExtractConceptRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IExtractConceptRequest);

            /** The Concept name given by the user */
            public conceptName?: (gauge.messages.Istep|null);

            /** steps to extract */
            public steps: gauge.messages.Istep[];

            /** Flag indicating if refactoring should be done across project */
            public changeAcrossProject: boolean;

            /** The concept filename in which extracted concept will be added */
            public conceptFileName: string;

            /** Info related to selected text, only if changeAcrossProject is false */
            public selectedTextInfo?: (gauge.messages.ItextInfo|null);

            /**
             * Creates a new ExtractConceptRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtractConceptRequest instance
             */
            public static create(properties?: gauge.messages.IExtractConceptRequest): gauge.messages.ExtractConceptRequest;

            /**
             * Encodes the specified ExtractConceptRequest message. Does not implicitly {@link gauge.messages.ExtractConceptRequest.verify|verify} messages.
             * @param message ExtractConceptRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IExtractConceptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtractConceptRequest message, length delimited. Does not implicitly {@link gauge.messages.ExtractConceptRequest.verify|verify} messages.
             * @param message ExtractConceptRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IExtractConceptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtractConceptRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtractConceptRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ExtractConceptRequest;

            /**
             * Decodes an ExtractConceptRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtractConceptRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ExtractConceptRequest;

            /**
             * Verifies an ExtractConceptRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtractConceptRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtractConceptRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ExtractConceptRequest;

            /**
             * Creates a plain object from an ExtractConceptRequest message. Also converts values to other types if specified.
             * @param message ExtractConceptRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ExtractConceptRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtractConceptRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a textInfo. */
        interface ItextInfo {

            /** The filename from where concept is being extracted */
            fileName?: (string|null);

            /** storing the starting and ending line number of selected text */
            startingLineNo?: (number|null);

            /** textInfo endLineNo */
            endLineNo?: (number|null);
        }

        /** Represents a textInfo. */
        class textInfo implements ItextInfo {

            /**
             * Constructs a new textInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.ItextInfo);

            /** The filename from where concept is being extracted */
            public fileName: string;

            /** storing the starting and ending line number of selected text */
            public startingLineNo: number;

            /** textInfo endLineNo. */
            public endLineNo: number;

            /**
             * Creates a new textInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns textInfo instance
             */
            public static create(properties?: gauge.messages.ItextInfo): gauge.messages.textInfo;

            /**
             * Encodes the specified textInfo message. Does not implicitly {@link gauge.messages.textInfo.verify|verify} messages.
             * @param message textInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.ItextInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified textInfo message, length delimited. Does not implicitly {@link gauge.messages.textInfo.verify|verify} messages.
             * @param message textInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.ItextInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a textInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns textInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.textInfo;

            /**
             * Decodes a textInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns textInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.textInfo;

            /**
             * Verifies a textInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a textInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns textInfo
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.textInfo;

            /**
             * Creates a plain object from a textInfo message. Also converts values to other types if specified.
             * @param message textInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.textInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this textInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a step. */
        interface Istep {

            /** name of the step */
            name?: (string|null);

            /** table present in step as parameter */
            table?: (string|null);

            /** name of table in concept heading, if it comes as a param to concept */
            paramTableName?: (string|null);
        }

        /** Represents a step. */
        class step implements Istep {

            /**
             * Constructs a new step.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.Istep);

            /** name of the step */
            public name: string;

            /** table present in step as parameter */
            public table: string;

            /** name of table in concept heading, if it comes as a param to concept */
            public paramTableName: string;

            /**
             * Creates a new step instance using the specified properties.
             * @param [properties] Properties to set
             * @returns step instance
             */
            public static create(properties?: gauge.messages.Istep): gauge.messages.step;

            /**
             * Encodes the specified step message. Does not implicitly {@link gauge.messages.step.verify|verify} messages.
             * @param message step message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.Istep, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified step message, length delimited. Does not implicitly {@link gauge.messages.step.verify|verify} messages.
             * @param message step message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.Istep, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a step message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns step
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.step;

            /**
             * Decodes a step message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns step
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.step;

            /**
             * Verifies a step message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a step message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns step
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.step;

            /**
             * Creates a plain object from a step message. Also converts values to other types if specified.
             * @param message step
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.step, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this step to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExtractConceptResponse. */
        interface IExtractConceptResponse {

            /** Flag indicating Success */
            isSuccess?: (boolean|null);

            /** Error message if the refactoring was unsuccessful. */
            error?: (string|null);

            /** Collection of files that were changed as part of the Refactoring. */
            filesChanged?: (string[]|null);
        }

        /** Response to perform Extract to Concept refactoring */
        class ExtractConceptResponse implements IExtractConceptResponse {

            /**
             * Constructs a new ExtractConceptResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IExtractConceptResponse);

            /** Flag indicating Success */
            public isSuccess: boolean;

            /** Error message if the refactoring was unsuccessful. */
            public error: string;

            /** Collection of files that were changed as part of the Refactoring. */
            public filesChanged: string[];

            /**
             * Creates a new ExtractConceptResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtractConceptResponse instance
             */
            public static create(properties?: gauge.messages.IExtractConceptResponse): gauge.messages.ExtractConceptResponse;

            /**
             * Encodes the specified ExtractConceptResponse message. Does not implicitly {@link gauge.messages.ExtractConceptResponse.verify|verify} messages.
             * @param message ExtractConceptResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IExtractConceptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtractConceptResponse message, length delimited. Does not implicitly {@link gauge.messages.ExtractConceptResponse.verify|verify} messages.
             * @param message ExtractConceptResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IExtractConceptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtractConceptResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtractConceptResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ExtractConceptResponse;

            /**
             * Decodes an ExtractConceptResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtractConceptResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ExtractConceptResponse;

            /**
             * Verifies an ExtractConceptResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtractConceptResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtractConceptResponse
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ExtractConceptResponse;

            /**
             * Creates a plain object from an ExtractConceptResponse message. Also converts values to other types if specified.
             * @param message ExtractConceptResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ExtractConceptResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtractConceptResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FormatSpecsRequest. */
        interface IFormatSpecsRequest {

            /** Specs to be formatted */
            specs?: (string[]|null);
        }

        /** Request to format spec files */
        class FormatSpecsRequest implements IFormatSpecsRequest {

            /**
             * Constructs a new FormatSpecsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IFormatSpecsRequest);

            /** Specs to be formatted */
            public specs: string[];

            /**
             * Creates a new FormatSpecsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FormatSpecsRequest instance
             */
            public static create(properties?: gauge.messages.IFormatSpecsRequest): gauge.messages.FormatSpecsRequest;

            /**
             * Encodes the specified FormatSpecsRequest message. Does not implicitly {@link gauge.messages.FormatSpecsRequest.verify|verify} messages.
             * @param message FormatSpecsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IFormatSpecsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FormatSpecsRequest message, length delimited. Does not implicitly {@link gauge.messages.FormatSpecsRequest.verify|verify} messages.
             * @param message FormatSpecsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IFormatSpecsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FormatSpecsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FormatSpecsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.FormatSpecsRequest;

            /**
             * Decodes a FormatSpecsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FormatSpecsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.FormatSpecsRequest;

            /**
             * Verifies a FormatSpecsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FormatSpecsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FormatSpecsRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.FormatSpecsRequest;

            /**
             * Creates a plain object from a FormatSpecsRequest message. Also converts values to other types if specified.
             * @param message FormatSpecsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.FormatSpecsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FormatSpecsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FormatSpecsResponse. */
        interface IFormatSpecsResponse {

            /** Errors occurred on formatting */
            errors?: (string[]|null);

            /** Warnings occurred on formatting */
            warnings?: (string[]|null);
        }

        /** Response on formatting spec files */
        class FormatSpecsResponse implements IFormatSpecsResponse {

            /**
             * Constructs a new FormatSpecsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IFormatSpecsResponse);

            /** Errors occurred on formatting */
            public errors: string[];

            /** Warnings occurred on formatting */
            public warnings: string[];

            /**
             * Creates a new FormatSpecsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FormatSpecsResponse instance
             */
            public static create(properties?: gauge.messages.IFormatSpecsResponse): gauge.messages.FormatSpecsResponse;

            /**
             * Encodes the specified FormatSpecsResponse message. Does not implicitly {@link gauge.messages.FormatSpecsResponse.verify|verify} messages.
             * @param message FormatSpecsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IFormatSpecsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FormatSpecsResponse message, length delimited. Does not implicitly {@link gauge.messages.FormatSpecsResponse.verify|verify} messages.
             * @param message FormatSpecsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IFormatSpecsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FormatSpecsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FormatSpecsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.FormatSpecsResponse;

            /**
             * Decodes a FormatSpecsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FormatSpecsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.FormatSpecsResponse;

            /**
             * Verifies a FormatSpecsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FormatSpecsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FormatSpecsResponse
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.FormatSpecsResponse;

            /**
             * Creates a plain object from a FormatSpecsResponse message. Also converts values to other types if specified.
             * @param message FormatSpecsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.FormatSpecsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FormatSpecsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UnsupportedApiMessageResponse. */
        interface IUnsupportedApiMessageResponse {
        }

        /** Response when a API message request is not supported. */
        class UnsupportedApiMessageResponse implements IUnsupportedApiMessageResponse {

            /**
             * Constructs a new UnsupportedApiMessageResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IUnsupportedApiMessageResponse);

            /**
             * Creates a new UnsupportedApiMessageResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UnsupportedApiMessageResponse instance
             */
            public static create(properties?: gauge.messages.IUnsupportedApiMessageResponse): gauge.messages.UnsupportedApiMessageResponse;

            /**
             * Encodes the specified UnsupportedApiMessageResponse message. Does not implicitly {@link gauge.messages.UnsupportedApiMessageResponse.verify|verify} messages.
             * @param message UnsupportedApiMessageResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IUnsupportedApiMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UnsupportedApiMessageResponse message, length delimited. Does not implicitly {@link gauge.messages.UnsupportedApiMessageResponse.verify|verify} messages.
             * @param message UnsupportedApiMessageResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IUnsupportedApiMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UnsupportedApiMessageResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UnsupportedApiMessageResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.UnsupportedApiMessageResponse;

            /**
             * Decodes an UnsupportedApiMessageResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UnsupportedApiMessageResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.UnsupportedApiMessageResponse;

            /**
             * Verifies an UnsupportedApiMessageResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UnsupportedApiMessageResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UnsupportedApiMessageResponse
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.UnsupportedApiMessageResponse;

            /**
             * Creates a plain object from an UnsupportedApiMessageResponse message. Also converts values to other types if specified.
             * @param message UnsupportedApiMessageResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.UnsupportedApiMessageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UnsupportedApiMessageResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a APIMessage. */
        interface IAPIMessage {

            /** Type of API call being made */
            messageType?: (gauge.messages.APIMessage.APIMessageType|null);

            /** This is used to synchronize messages & responses */
            messageId?: (number|Long|null);

            /** [GetProjectRootRequest](#gauge.messages.GetProjectRootRequest) */
            projectRootRequest?: (gauge.messages.IGetProjectRootRequest|null);

            /** [GetProjectRootResponse](#gauge.messages.GetProjectRootResponse) */
            projectRootResponse?: (gauge.messages.IGetProjectRootResponse|null);

            /** [GetInstallationRootRequest](#gauge.messages.GetInstallationRootRequest) */
            installationRootRequest?: (gauge.messages.IGetInstallationRootRequest|null);

            /** [GetInstallationRootResponse](#gauge.messages.GetInstallationRootResponse) */
            installationRootResponse?: (gauge.messages.IGetInstallationRootResponse|null);

            /** [GetAllStepsRequest](#gauge.messages.GetAllStepsRequest) */
            allStepsRequest?: (gauge.messages.IGetAllStepsRequest|null);

            /** [GetAllStepsResponse](#gauge.messages.GetAllStepsResponse) */
            allStepsResponse?: (gauge.messages.IGetAllStepsResponse|null);

            /** [GetAllSpecsRequest](#gauge.messages.GetAllSpecsRequest) */
            specsRequest?: (gauge.messages.ISpecsRequest|null);

            /** [GetAllSpecsResponse](#gauge.messages.GetAllSpecsResponse) */
            specsResponse?: (gauge.messages.ISpecsResponse|null);

            /** [GetStepValueRequest](#gauge.messages.GetStepValueRequest) */
            stepValueRequest?: (gauge.messages.IGetStepValueRequest|null);

            /** [GetStepValueResponse](#gauge.messages.GetStepValueResponse) */
            stepValueResponse?: (gauge.messages.IGetStepValueResponse|null);

            /** [GetLanguagePluginLibPathRequest](#gauge.messages.GetLanguagePluginLibPathRequest) */
            libPathRequest?: (gauge.messages.IGetLanguagePluginLibPathRequest|null);

            /** [GetLanguagePluginLibPathResponse](#gauge.messages.GetLanguagePluginLibPathResponse) */
            libPathResponse?: (gauge.messages.IGetLanguagePluginLibPathResponse|null);

            /** [ErrorResponse](#gauge.messages.ErrorResponse) */
            error?: (gauge.messages.IErrorResponse|null);

            /** [GetAllConceptsRequest](#gauge.messages.GetAllConceptsRequest) */
            allConceptsRequest?: (gauge.messages.IGetAllConceptsRequest|null);

            /** [GetAllConceptsResponse](#gauge.messages.GetAllConceptsResponse) */
            allConceptsResponse?: (gauge.messages.IGetAllConceptsResponse|null);

            /** [PerformRefactoringRequest](#gauge.messages.PerformRefactoringRequest) */
            performRefactoringRequest?: (gauge.messages.IPerformRefactoringRequest|null);

            /** [PerformRefactoringResponse](#gauge.messages.PerformRefactoringResponse) */
            performRefactoringResponse?: (gauge.messages.IPerformRefactoringResponse|null);

            /** [ExtractConceptRequest](#gauge.messages.ExtractConceptRequest) */
            extractConceptRequest?: (gauge.messages.IExtractConceptRequest|null);

            /** [ExtractConceptResponse](#gauge.messages.ExtractConceptResponse) */
            extractConceptResponse?: (gauge.messages.IExtractConceptResponse|null);

            /** [FormatSpecsRequest] (#gauge.messages.FormatSpecsRequest) */
            formatSpecsRequest?: (gauge.messages.IFormatSpecsRequest|null);

            /** [FormatSpecsResponse] (#gauge.messages.FormatSpecsResponse) */
            formatSpecsResponse?: (gauge.messages.IFormatSpecsResponse|null);

            /** [UnsupportedApiMessageResponse] (#gauge.messages.UnsupportedApiMessageResponse) */
            unsupportedApiMessageResponse?: (gauge.messages.IUnsupportedApiMessageResponse|null);
        }

        /** One of the Request/Response fields will have value, depending on the MessageType set. */
        class APIMessage implements IAPIMessage {

            /**
             * Constructs a new APIMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IAPIMessage);

            /** Type of API call being made */
            public messageType: gauge.messages.APIMessage.APIMessageType;

            /** This is used to synchronize messages & responses */
            public messageId: (number|Long);

            /** [GetProjectRootRequest](#gauge.messages.GetProjectRootRequest) */
            public projectRootRequest?: (gauge.messages.IGetProjectRootRequest|null);

            /** [GetProjectRootResponse](#gauge.messages.GetProjectRootResponse) */
            public projectRootResponse?: (gauge.messages.IGetProjectRootResponse|null);

            /** [GetInstallationRootRequest](#gauge.messages.GetInstallationRootRequest) */
            public installationRootRequest?: (gauge.messages.IGetInstallationRootRequest|null);

            /** [GetInstallationRootResponse](#gauge.messages.GetInstallationRootResponse) */
            public installationRootResponse?: (gauge.messages.IGetInstallationRootResponse|null);

            /** [GetAllStepsRequest](#gauge.messages.GetAllStepsRequest) */
            public allStepsRequest?: (gauge.messages.IGetAllStepsRequest|null);

            /** [GetAllStepsResponse](#gauge.messages.GetAllStepsResponse) */
            public allStepsResponse?: (gauge.messages.IGetAllStepsResponse|null);

            /** [GetAllSpecsRequest](#gauge.messages.GetAllSpecsRequest) */
            public specsRequest?: (gauge.messages.ISpecsRequest|null);

            /** [GetAllSpecsResponse](#gauge.messages.GetAllSpecsResponse) */
            public specsResponse?: (gauge.messages.ISpecsResponse|null);

            /** [GetStepValueRequest](#gauge.messages.GetStepValueRequest) */
            public stepValueRequest?: (gauge.messages.IGetStepValueRequest|null);

            /** [GetStepValueResponse](#gauge.messages.GetStepValueResponse) */
            public stepValueResponse?: (gauge.messages.IGetStepValueResponse|null);

            /** [GetLanguagePluginLibPathRequest](#gauge.messages.GetLanguagePluginLibPathRequest) */
            public libPathRequest?: (gauge.messages.IGetLanguagePluginLibPathRequest|null);

            /** [GetLanguagePluginLibPathResponse](#gauge.messages.GetLanguagePluginLibPathResponse) */
            public libPathResponse?: (gauge.messages.IGetLanguagePluginLibPathResponse|null);

            /** [ErrorResponse](#gauge.messages.ErrorResponse) */
            public error?: (gauge.messages.IErrorResponse|null);

            /** [GetAllConceptsRequest](#gauge.messages.GetAllConceptsRequest) */
            public allConceptsRequest?: (gauge.messages.IGetAllConceptsRequest|null);

            /** [GetAllConceptsResponse](#gauge.messages.GetAllConceptsResponse) */
            public allConceptsResponse?: (gauge.messages.IGetAllConceptsResponse|null);

            /** [PerformRefactoringRequest](#gauge.messages.PerformRefactoringRequest) */
            public performRefactoringRequest?: (gauge.messages.IPerformRefactoringRequest|null);

            /** [PerformRefactoringResponse](#gauge.messages.PerformRefactoringResponse) */
            public performRefactoringResponse?: (gauge.messages.IPerformRefactoringResponse|null);

            /** [ExtractConceptRequest](#gauge.messages.ExtractConceptRequest) */
            public extractConceptRequest?: (gauge.messages.IExtractConceptRequest|null);

            /** [ExtractConceptResponse](#gauge.messages.ExtractConceptResponse) */
            public extractConceptResponse?: (gauge.messages.IExtractConceptResponse|null);

            /** [FormatSpecsRequest] (#gauge.messages.FormatSpecsRequest) */
            public formatSpecsRequest?: (gauge.messages.IFormatSpecsRequest|null);

            /** [FormatSpecsResponse] (#gauge.messages.FormatSpecsResponse) */
            public formatSpecsResponse?: (gauge.messages.IFormatSpecsResponse|null);

            /** [UnsupportedApiMessageResponse] (#gauge.messages.UnsupportedApiMessageResponse) */
            public unsupportedApiMessageResponse?: (gauge.messages.IUnsupportedApiMessageResponse|null);

            /**
             * Creates a new APIMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns APIMessage instance
             */
            public static create(properties?: gauge.messages.IAPIMessage): gauge.messages.APIMessage;

            /**
             * Encodes the specified APIMessage message. Does not implicitly {@link gauge.messages.APIMessage.verify|verify} messages.
             * @param message APIMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IAPIMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified APIMessage message, length delimited. Does not implicitly {@link gauge.messages.APIMessage.verify|verify} messages.
             * @param message APIMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IAPIMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a APIMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns APIMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.APIMessage;

            /**
             * Decodes a APIMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns APIMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.APIMessage;

            /**
             * Verifies a APIMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a APIMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns APIMessage
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.APIMessage;

            /**
             * Creates a plain object from a APIMessage message. Also converts values to other types if specified.
             * @param message APIMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.APIMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this APIMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace APIMessage {

            /** APIMessageType enum. */
            enum APIMessageType {
                GetProjectRootRequest = 0,
                GetProjectRootResponse = 1,
                GetInstallationRootRequest = 2,
                GetInstallationRootResponse = 3,
                GetAllStepsRequest = 4,
                GetAllStepResponse = 5,
                SpecsRequest = 6,
                SpecsResponse = 7,
                GetStepValueRequest = 8,
                GetStepValueResponse = 9,
                GetLanguagePluginLibPathRequest = 10,
                GetLanguagePluginLibPathResponse = 11,
                ErrorResponse = 12,
                GetAllConceptsRequest = 13,
                GetAllConceptsResponse = 14,
                PerformRefactoringRequest = 15,
                PerformRefactoringResponse = 16,
                ExtractConceptRequest = 17,
                ExtractConceptResponse = 18,
                FormatSpecsRequest = 19,
                FormatSpecsResponse = 20,
                UnsupportedApiMessageResponse = 21
            }
        }

        /** Properties of a ProtoSpec. */
        interface IProtoSpec {

            /** Heading describing the Specification */
            specHeading?: (string|null);

            /** A collection of items that come under this step */
            items?: (gauge.messages.IProtoItem[]|null);

            /** Flag indicating if this is a Table Driven Specification. The table is defined in the context, this is different from using a table parameter. */
            isTableDriven?: (boolean|null);

            /** Contains a 'before' hook failure message. This happens when the `before_spec` hook has an error. */
            preHookFailures?: (gauge.messages.IProtoHookFailure[]|null);

            /** Contains a 'before' hook failure message. This happens when the `after_hook` hook has an error. */
            postHookFailures?: (gauge.messages.IProtoHookFailure[]|null);

            /** Contains the filename for that holds this specification. */
            fileName?: (string|null);

            /** Contains a list of tags that are defined at the specification level. Scenario tags are not present here. */
            tags?: (string[]|null);

            /** Additional information at pre hook exec time to be available on reports */
            preHookMessages?: (string[]|null);

            /** Additional information at post hook exec time to be available on reports */
            postHookMessages?: (string[]|null);

            /** [DEPRECATED, use preHookMessages] Additional information at pre hook exec time to be available on reports */
            preHookMessage?: (string[]|null);

            /** [DEPRECATED, use postHookMessages] Additional information at post hook exec time to be available on reports */
            postHookMessage?: (string[]|null);

            /** Capture Screenshot at pre hook exec time to be available on reports */
            preHookScreenshots?: (Uint8Array[]|null);

            /** Capture Screenshot at post hook exec time to be available on reports */
            postHookScreenshots?: (Uint8Array[]|null);

            /** used when items are sent as individual chunk */
            itemCount?: (number|Long|null);
        }

        /** A specification can contain Scenarios or Steps, besides Comments */
        class ProtoSpec implements IProtoSpec {

            /**
             * Constructs a new ProtoSpec.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IProtoSpec);

            /** Heading describing the Specification */
            public specHeading: string;

            /** A collection of items that come under this step */
            public items: gauge.messages.IProtoItem[];

            /** Flag indicating if this is a Table Driven Specification. The table is defined in the context, this is different from using a table parameter. */
            public isTableDriven: boolean;

            /** Contains a 'before' hook failure message. This happens when the `before_spec` hook has an error. */
            public preHookFailures: gauge.messages.IProtoHookFailure[];

            /** Contains a 'before' hook failure message. This happens when the `after_hook` hook has an error. */
            public postHookFailures: gauge.messages.IProtoHookFailure[];

            /** Contains the filename for that holds this specification. */
            public fileName: string;

            /** Contains a list of tags that are defined at the specification level. Scenario tags are not present here. */
            public tags: string[];

            /** Additional information at pre hook exec time to be available on reports */
            public preHookMessages: string[];

            /** Additional information at post hook exec time to be available on reports */
            public postHookMessages: string[];

            /** [DEPRECATED, use preHookMessages] Additional information at pre hook exec time to be available on reports */
            public preHookMessage: string[];

            /** [DEPRECATED, use postHookMessages] Additional information at post hook exec time to be available on reports */
            public postHookMessage: string[];

            /** Capture Screenshot at pre hook exec time to be available on reports */
            public preHookScreenshots: Uint8Array[];

            /** Capture Screenshot at post hook exec time to be available on reports */
            public postHookScreenshots: Uint8Array[];

            /** used when items are sent as individual chunk */
            public itemCount: (number|Long);

            /**
             * Creates a new ProtoSpec instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtoSpec instance
             */
            public static create(properties?: gauge.messages.IProtoSpec): gauge.messages.ProtoSpec;

            /**
             * Encodes the specified ProtoSpec message. Does not implicitly {@link gauge.messages.ProtoSpec.verify|verify} messages.
             * @param message ProtoSpec message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IProtoSpec, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtoSpec message, length delimited. Does not implicitly {@link gauge.messages.ProtoSpec.verify|verify} messages.
             * @param message ProtoSpec message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IProtoSpec, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtoSpec message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtoSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ProtoSpec;

            /**
             * Decodes a ProtoSpec message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtoSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ProtoSpec;

            /**
             * Verifies a ProtoSpec message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtoSpec message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtoSpec
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ProtoSpec;

            /**
             * Creates a plain object from a ProtoSpec message. Also converts values to other types if specified.
             * @param message ProtoSpec
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ProtoSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtoSpec to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProtoItem. */
        interface IProtoItem {

            /** Itemtype of the current ProtoItem */
            itemType?: (gauge.messages.ProtoItem.ItemType|null);

            /** Holds the Step definition. Valid only if ItemType = Step */
            step?: (gauge.messages.IProtoStep|null);

            /** Holds the Concept definition. Valid only if ItemType = Concept */
            concept?: (gauge.messages.IProtoConcept|null);

            /** Holds the Scenario definition. Valid only if ItemType = Scenario */
            scenario?: (gauge.messages.IProtoScenario|null);

            /** Holds the TableDrivenScenario definition. Valid only if ItemType = TableDrivenScenario */
            tableDrivenScenario?: (gauge.messages.IProtoTableDrivenScenario|null);

            /** Holds the Comment definition. Valid only if ItemType = Comment */
            comment?: (gauge.messages.IProtoComment|null);

            /** Holds the Table definition. Valid only if ItemType = Table */
            table?: (gauge.messages.IProtoTable|null);

            /** Holds the Tags definition. Valid only if ItemType = Tags */
            tags?: (gauge.messages.IProtoTags|null);

            /** Holds the Filename that the item belongs to */
            fileName?: (string|null);
        }

        /** Container for all valid Items under a Specification. */
        class ProtoItem implements IProtoItem {

            /**
             * Constructs a new ProtoItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IProtoItem);

            /** Itemtype of the current ProtoItem */
            public itemType: gauge.messages.ProtoItem.ItemType;

            /** Holds the Step definition. Valid only if ItemType = Step */
            public step?: (gauge.messages.IProtoStep|null);

            /** Holds the Concept definition. Valid only if ItemType = Concept */
            public concept?: (gauge.messages.IProtoConcept|null);

            /** Holds the Scenario definition. Valid only if ItemType = Scenario */
            public scenario?: (gauge.messages.IProtoScenario|null);

            /** Holds the TableDrivenScenario definition. Valid only if ItemType = TableDrivenScenario */
            public tableDrivenScenario?: (gauge.messages.IProtoTableDrivenScenario|null);

            /** Holds the Comment definition. Valid only if ItemType = Comment */
            public comment?: (gauge.messages.IProtoComment|null);

            /** Holds the Table definition. Valid only if ItemType = Table */
            public table?: (gauge.messages.IProtoTable|null);

            /** Holds the Tags definition. Valid only if ItemType = Tags */
            public tags?: (gauge.messages.IProtoTags|null);

            /** Holds the Filename that the item belongs to */
            public fileName: string;

            /**
             * Creates a new ProtoItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtoItem instance
             */
            public static create(properties?: gauge.messages.IProtoItem): gauge.messages.ProtoItem;

            /**
             * Encodes the specified ProtoItem message. Does not implicitly {@link gauge.messages.ProtoItem.verify|verify} messages.
             * @param message ProtoItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IProtoItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtoItem message, length delimited. Does not implicitly {@link gauge.messages.ProtoItem.verify|verify} messages.
             * @param message ProtoItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IProtoItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtoItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtoItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ProtoItem;

            /**
             * Decodes a ProtoItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtoItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ProtoItem;

            /**
             * Verifies a ProtoItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtoItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtoItem
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ProtoItem;

            /**
             * Creates a plain object from a ProtoItem message. Also converts values to other types if specified.
             * @param message ProtoItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ProtoItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtoItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ProtoItem {

            /** Enumerates various item types that the proto item can contain. Valid types are: Step, Comment, Concept, Scenario, TableDrivenScenario, Table, Tags */
            enum ItemType {
                Step = 0,
                Comment = 1,
                Concept = 2,
                Scenario = 3,
                TableDrivenScenario = 4,
                Table = 5,
                Tags = 6
            }
        }

        /** Execution Status */
        enum ExecutionStatus {
            NOTEXECUTED = 0,
            PASSED = 1,
            FAILED = 2,
            SKIPPED = 3
        }

        /** Properties of a ProtoScenario. */
        interface IProtoScenario {

            /** Heading of the given Scenario */
            scenarioHeading?: (string|null);

            /** Flag to indicate if the Scenario execution failed */
            failed?: (boolean|null);

            /** Collection of Context steps. The Context steps are executed before every run. */
            contexts?: (gauge.messages.IProtoItem[]|null);

            /** Collection of Items under a scenario. These could be Steps, Comments, Tags, TableDrivenScenarios or Tables */
            scenarioItems?: (gauge.messages.IProtoItem[]|null);

            /** Contains a 'before' hook failure message. This happens when the `before_scenario` hook has an error. */
            preHookFailure?: (gauge.messages.IProtoHookFailure|null);

            /** Contains a 'after' hook failure message. This happens when the `after_scenario` hook has an error. */
            postHookFailure?: (gauge.messages.IProtoHookFailure|null);

            /** Contains a list of tags that are defined at the specification level. Scenario tags are not present here. */
            tags?: (string[]|null);

            /** Holds the time taken for executing this scenario. */
            executionTime?: (number|Long|null);

            /** Flag to indicate if the Scenario execution is skipped */
            skipped?: (boolean|null);

            /** Holds the error messages for skipping scenario from execution */
            skipErrors?: (string[]|null);

            /** Holds the unique Identifier of a scenario. */
            ID?: (string|null);

            /** Collection of Teardown steps. The Teardown steps are executed after every run. */
            tearDownSteps?: (gauge.messages.IProtoItem[]|null);

            /** Span(start, end) of scenario */
            span?: (gauge.messages.ISpan|null);

            /** Execution status for the scenario */
            executionStatus?: (gauge.messages.ExecutionStatus|null);

            /** Additional information at pre hook exec time to be available on reports */
            preHookMessages?: (string[]|null);

            /** Additional information at post hook exec time to be available on reports */
            postHookMessages?: (string[]|null);

            /** [DEPRECATED, use preHookMessages] Additional information at pre hook exec time to be available on reports */
            preHookMessage?: (string[]|null);

            /** [DEPRECATED, use postHookMessages] Additional information at post hook exec time to be available on reports */
            postHookMessage?: (string[]|null);

            /** Capture Screenshot at pre hook exec time to be available on reports */
            preHookScreenshots?: (Uint8Array[]|null);

            /** Capture Screenshot at post hook exec time to be available on reports */
            postHookScreenshots?: (Uint8Array[]|null);
        }

        /** A proto object representing a Scenario */
        class ProtoScenario implements IProtoScenario {

            /**
             * Constructs a new ProtoScenario.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IProtoScenario);

            /** Heading of the given Scenario */
            public scenarioHeading: string;

            /** Flag to indicate if the Scenario execution failed */
            public failed: boolean;

            /** Collection of Context steps. The Context steps are executed before every run. */
            public contexts: gauge.messages.IProtoItem[];

            /** Collection of Items under a scenario. These could be Steps, Comments, Tags, TableDrivenScenarios or Tables */
            public scenarioItems: gauge.messages.IProtoItem[];

            /** Contains a 'before' hook failure message. This happens when the `before_scenario` hook has an error. */
            public preHookFailure?: (gauge.messages.IProtoHookFailure|null);

            /** Contains a 'after' hook failure message. This happens when the `after_scenario` hook has an error. */
            public postHookFailure?: (gauge.messages.IProtoHookFailure|null);

            /** Contains a list of tags that are defined at the specification level. Scenario tags are not present here. */
            public tags: string[];

            /** Holds the time taken for executing this scenario. */
            public executionTime: (number|Long);

            /** Flag to indicate if the Scenario execution is skipped */
            public skipped: boolean;

            /** Holds the error messages for skipping scenario from execution */
            public skipErrors: string[];

            /** Holds the unique Identifier of a scenario. */
            public ID: string;

            /** Collection of Teardown steps. The Teardown steps are executed after every run. */
            public tearDownSteps: gauge.messages.IProtoItem[];

            /** Span(start, end) of scenario */
            public span?: (gauge.messages.ISpan|null);

            /** Execution status for the scenario */
            public executionStatus: gauge.messages.ExecutionStatus;

            /** Additional information at pre hook exec time to be available on reports */
            public preHookMessages: string[];

            /** Additional information at post hook exec time to be available on reports */
            public postHookMessages: string[];

            /** [DEPRECATED, use preHookMessages] Additional information at pre hook exec time to be available on reports */
            public preHookMessage: string[];

            /** [DEPRECATED, use postHookMessages] Additional information at post hook exec time to be available on reports */
            public postHookMessage: string[];

            /** Capture Screenshot at pre hook exec time to be available on reports */
            public preHookScreenshots: Uint8Array[];

            /** Capture Screenshot at post hook exec time to be available on reports */
            public postHookScreenshots: Uint8Array[];

            /**
             * Creates a new ProtoScenario instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtoScenario instance
             */
            public static create(properties?: gauge.messages.IProtoScenario): gauge.messages.ProtoScenario;

            /**
             * Encodes the specified ProtoScenario message. Does not implicitly {@link gauge.messages.ProtoScenario.verify|verify} messages.
             * @param message ProtoScenario message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IProtoScenario, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtoScenario message, length delimited. Does not implicitly {@link gauge.messages.ProtoScenario.verify|verify} messages.
             * @param message ProtoScenario message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IProtoScenario, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtoScenario message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtoScenario
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ProtoScenario;

            /**
             * Decodes a ProtoScenario message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtoScenario
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ProtoScenario;

            /**
             * Verifies a ProtoScenario message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtoScenario message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtoScenario
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ProtoScenario;

            /**
             * Creates a plain object from a ProtoScenario message. Also converts values to other types if specified.
             * @param message ProtoScenario
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ProtoScenario, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtoScenario to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Span. */
        interface ISpan {

            /** Span start */
            start?: (number|Long|null);

            /** Span end */
            end?: (number|Long|null);

            /** Span startChar */
            startChar?: (number|Long|null);

            /** Span endChar */
            endChar?: (number|Long|null);
        }

        /** A proto object representing a Span of content */
        class Span implements ISpan {

            /**
             * Constructs a new Span.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.ISpan);

            /** Span start. */
            public start: (number|Long);

            /** Span end. */
            public end: (number|Long);

            /** Span startChar. */
            public startChar: (number|Long);

            /** Span endChar. */
            public endChar: (number|Long);

            /**
             * Creates a new Span instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Span instance
             */
            public static create(properties?: gauge.messages.ISpan): gauge.messages.Span;

            /**
             * Encodes the specified Span message. Does not implicitly {@link gauge.messages.Span.verify|verify} messages.
             * @param message Span message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.ISpan, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Span message, length delimited. Does not implicitly {@link gauge.messages.Span.verify|verify} messages.
             * @param message Span message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.ISpan, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Span message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Span
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.Span;

            /**
             * Decodes a Span message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Span
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.Span;

            /**
             * Verifies a Span message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Span message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Span
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.Span;

            /**
             * Creates a plain object from a Span message. Also converts values to other types if specified.
             * @param message Span
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.Span, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Span to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProtoTableDrivenScenario. */
        interface IProtoTableDrivenScenario {

            /** Scenario under Table driven execution */
            scenario?: (gauge.messages.IProtoScenario|null);

            /** Row Index of data table against which the current scenario is executed */
            tableRowIndex?: (number|null);

            /** Row Index of scenario data table against which the current scenario is executed */
            scenarioTableRowIndex?: (number|null);

            /** Executed against a spec data table */
            isSpecTableDriven?: (boolean|null);

            /** Executed against a scenario data table */
            isScenarioTableDriven?: (boolean|null);

            /** Holds the scenario data table */
            scenarioDataTable?: (gauge.messages.IProtoTable|null);
        }

        /** A proto object representing a TableDrivenScenario */
        class ProtoTableDrivenScenario implements IProtoTableDrivenScenario {

            /**
             * Constructs a new ProtoTableDrivenScenario.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IProtoTableDrivenScenario);

            /** Scenario under Table driven execution */
            public scenario?: (gauge.messages.IProtoScenario|null);

            /** Row Index of data table against which the current scenario is executed */
            public tableRowIndex: number;

            /** Row Index of scenario data table against which the current scenario is executed */
            public scenarioTableRowIndex: number;

            /** Executed against a spec data table */
            public isSpecTableDriven: boolean;

            /** Executed against a scenario data table */
            public isScenarioTableDriven: boolean;

            /** Holds the scenario data table */
            public scenarioDataTable?: (gauge.messages.IProtoTable|null);

            /**
             * Creates a new ProtoTableDrivenScenario instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtoTableDrivenScenario instance
             */
            public static create(properties?: gauge.messages.IProtoTableDrivenScenario): gauge.messages.ProtoTableDrivenScenario;

            /**
             * Encodes the specified ProtoTableDrivenScenario message. Does not implicitly {@link gauge.messages.ProtoTableDrivenScenario.verify|verify} messages.
             * @param message ProtoTableDrivenScenario message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IProtoTableDrivenScenario, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtoTableDrivenScenario message, length delimited. Does not implicitly {@link gauge.messages.ProtoTableDrivenScenario.verify|verify} messages.
             * @param message ProtoTableDrivenScenario message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IProtoTableDrivenScenario, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtoTableDrivenScenario message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtoTableDrivenScenario
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ProtoTableDrivenScenario;

            /**
             * Decodes a ProtoTableDrivenScenario message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtoTableDrivenScenario
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ProtoTableDrivenScenario;

            /**
             * Verifies a ProtoTableDrivenScenario message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtoTableDrivenScenario message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtoTableDrivenScenario
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ProtoTableDrivenScenario;

            /**
             * Creates a plain object from a ProtoTableDrivenScenario message. Also converts values to other types if specified.
             * @param message ProtoTableDrivenScenario
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ProtoTableDrivenScenario, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtoTableDrivenScenario to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProtoStep. */
        interface IProtoStep {

            /** Holds the raw text of the Step as defined in the spec file. This contains the actual parameter values. */
            actualText?: (string|null);

            /** Contains the parsed text of the Step. This will have placeholders for the parameters. */
            parsedText?: (string|null);

            /** Collection of a list of fragments for a Step. A fragment could be either text or parameter. */
            fragments?: (gauge.messages.IFragment[]|null);

            /** Holds the result from the execution. */
            stepExecutionResult?: (gauge.messages.IProtoStepExecutionResult|null);

            /** Additional information at pre hook exec time to be available on reports */
            preHookMessages?: (string[]|null);

            /** Additional information at post hook exec time to be available on reports */
            postHookMessages?: (string[]|null);

            /** Capture Screenshot at pre hook exec time to be available on reports */
            preHookScreenshots?: (Uint8Array[]|null);

            /** Capture Screenshot at post hook exec time to be available on reports */
            postHookScreenshots?: (Uint8Array[]|null);
        }

        /** A proto object representing a Step */
        class ProtoStep implements IProtoStep {

            /**
             * Constructs a new ProtoStep.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IProtoStep);

            /** Holds the raw text of the Step as defined in the spec file. This contains the actual parameter values. */
            public actualText: string;

            /** Contains the parsed text of the Step. This will have placeholders for the parameters. */
            public parsedText: string;

            /** Collection of a list of fragments for a Step. A fragment could be either text or parameter. */
            public fragments: gauge.messages.IFragment[];

            /** Holds the result from the execution. */
            public stepExecutionResult?: (gauge.messages.IProtoStepExecutionResult|null);

            /** Additional information at pre hook exec time to be available on reports */
            public preHookMessages: string[];

            /** Additional information at post hook exec time to be available on reports */
            public postHookMessages: string[];

            /** Capture Screenshot at pre hook exec time to be available on reports */
            public preHookScreenshots: Uint8Array[];

            /** Capture Screenshot at post hook exec time to be available on reports */
            public postHookScreenshots: Uint8Array[];

            /**
             * Creates a new ProtoStep instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtoStep instance
             */
            public static create(properties?: gauge.messages.IProtoStep): gauge.messages.ProtoStep;

            /**
             * Encodes the specified ProtoStep message. Does not implicitly {@link gauge.messages.ProtoStep.verify|verify} messages.
             * @param message ProtoStep message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IProtoStep, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtoStep message, length delimited. Does not implicitly {@link gauge.messages.ProtoStep.verify|verify} messages.
             * @param message ProtoStep message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IProtoStep, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtoStep message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtoStep
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ProtoStep;

            /**
             * Decodes a ProtoStep message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtoStep
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ProtoStep;

            /**
             * Verifies a ProtoStep message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtoStep message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtoStep
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ProtoStep;

            /**
             * Creates a plain object from a ProtoStep message. Also converts values to other types if specified.
             * @param message ProtoStep
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ProtoStep, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtoStep to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProtoConcept. */
        interface IProtoConcept {

            /** Represents the Step value of a Concept. */
            conceptStep?: (gauge.messages.IProtoStep|null);

            /** Collection of Steps in the given concepts. */
            steps?: (gauge.messages.IProtoItem[]|null);

            /** Holds the execution result. */
            conceptExecutionResult?: (gauge.messages.IProtoStepExecutionResult|null);
        }

        /** A proto object representing a Concept */
        class ProtoConcept implements IProtoConcept {

            /**
             * Constructs a new ProtoConcept.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IProtoConcept);

            /** Represents the Step value of a Concept. */
            public conceptStep?: (gauge.messages.IProtoStep|null);

            /** Collection of Steps in the given concepts. */
            public steps: gauge.messages.IProtoItem[];

            /** Holds the execution result. */
            public conceptExecutionResult?: (gauge.messages.IProtoStepExecutionResult|null);

            /**
             * Creates a new ProtoConcept instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtoConcept instance
             */
            public static create(properties?: gauge.messages.IProtoConcept): gauge.messages.ProtoConcept;

            /**
             * Encodes the specified ProtoConcept message. Does not implicitly {@link gauge.messages.ProtoConcept.verify|verify} messages.
             * @param message ProtoConcept message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IProtoConcept, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtoConcept message, length delimited. Does not implicitly {@link gauge.messages.ProtoConcept.verify|verify} messages.
             * @param message ProtoConcept message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IProtoConcept, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtoConcept message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtoConcept
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ProtoConcept;

            /**
             * Decodes a ProtoConcept message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtoConcept
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ProtoConcept;

            /**
             * Verifies a ProtoConcept message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtoConcept message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtoConcept
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ProtoConcept;

            /**
             * Creates a plain object from a ProtoConcept message. Also converts values to other types if specified.
             * @param message ProtoConcept
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ProtoConcept, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtoConcept to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProtoTags. */
        interface IProtoTags {

            /** A collection of Tags */
            tags?: (string[]|null);
        }

        /** A proto object representing Tags */
        class ProtoTags implements IProtoTags {

            /**
             * Constructs a new ProtoTags.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IProtoTags);

            /** A collection of Tags */
            public tags: string[];

            /**
             * Creates a new ProtoTags instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtoTags instance
             */
            public static create(properties?: gauge.messages.IProtoTags): gauge.messages.ProtoTags;

            /**
             * Encodes the specified ProtoTags message. Does not implicitly {@link gauge.messages.ProtoTags.verify|verify} messages.
             * @param message ProtoTags message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IProtoTags, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtoTags message, length delimited. Does not implicitly {@link gauge.messages.ProtoTags.verify|verify} messages.
             * @param message ProtoTags message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IProtoTags, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtoTags message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtoTags
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ProtoTags;

            /**
             * Decodes a ProtoTags message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtoTags
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ProtoTags;

            /**
             * Verifies a ProtoTags message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtoTags message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtoTags
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ProtoTags;

            /**
             * Creates a plain object from a ProtoTags message. Also converts values to other types if specified.
             * @param message ProtoTags
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ProtoTags, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtoTags to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Fragment. */
        interface IFragment {

            /** Type of Fragment, valid values are Text, Parameter */
            fragmentType?: (gauge.messages.Fragment.FragmentType|null);

            /** Text part of the Fragment, valid only if FragmentType=Text */
            text?: (string|null);

            /** Parameter part of the Fragment, valid only if FragmentType=Parameter */
            parameter?: (gauge.messages.IParameter|null);
        }

        /** Fragments, put together make up A Step */
        class Fragment implements IFragment {

            /**
             * Constructs a new Fragment.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IFragment);

            /** Type of Fragment, valid values are Text, Parameter */
            public fragmentType: gauge.messages.Fragment.FragmentType;

            /** Text part of the Fragment, valid only if FragmentType=Text */
            public text: string;

            /** Parameter part of the Fragment, valid only if FragmentType=Parameter */
            public parameter?: (gauge.messages.IParameter|null);

            /**
             * Creates a new Fragment instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Fragment instance
             */
            public static create(properties?: gauge.messages.IFragment): gauge.messages.Fragment;

            /**
             * Encodes the specified Fragment message. Does not implicitly {@link gauge.messages.Fragment.verify|verify} messages.
             * @param message Fragment message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IFragment, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Fragment message, length delimited. Does not implicitly {@link gauge.messages.Fragment.verify|verify} messages.
             * @param message Fragment message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IFragment, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Fragment message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Fragment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.Fragment;

            /**
             * Decodes a Fragment message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Fragment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.Fragment;

            /**
             * Verifies a Fragment message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Fragment message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Fragment
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.Fragment;

            /**
             * Creates a plain object from a Fragment message. Also converts values to other types if specified.
             * @param message Fragment
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.Fragment, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Fragment to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Fragment {

            /** Enum representing the types of Fragment */
            enum FragmentType {
                Text = 0,
                Parameter = 1
            }
        }

        /** Properties of a Parameter. */
        interface IParameter {

            /** Type of the Parameter. Valid values: Static, Dynamic, Special_String, Special_Table, Table */
            parameterType?: (gauge.messages.Parameter.ParameterType|null);

            /** Holds the value of the parameter */
            value?: (string|null);

            /** Holds the name of the parameter, used as Key to lookup the value. */
            name?: (string|null);

            /** Holds the table value, if parameterType=Table or Special_Table */
            table?: (gauge.messages.IProtoTable|null);
        }

        /** A proto object representing Fragment. */
        class Parameter implements IParameter {

            /**
             * Constructs a new Parameter.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IParameter);

            /** Type of the Parameter. Valid values: Static, Dynamic, Special_String, Special_Table, Table */
            public parameterType: gauge.messages.Parameter.ParameterType;

            /** Holds the value of the parameter */
            public value: string;

            /** Holds the name of the parameter, used as Key to lookup the value. */
            public name: string;

            /** Holds the table value, if parameterType=Table or Special_Table */
            public table?: (gauge.messages.IProtoTable|null);

            /**
             * Creates a new Parameter instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Parameter instance
             */
            public static create(properties?: gauge.messages.IParameter): gauge.messages.Parameter;

            /**
             * Encodes the specified Parameter message. Does not implicitly {@link gauge.messages.Parameter.verify|verify} messages.
             * @param message Parameter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Parameter message, length delimited. Does not implicitly {@link gauge.messages.Parameter.verify|verify} messages.
             * @param message Parameter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Parameter message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Parameter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.Parameter;

            /**
             * Decodes a Parameter message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Parameter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.Parameter;

            /**
             * Verifies a Parameter message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Parameter message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Parameter
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.Parameter;

            /**
             * Creates a plain object from a Parameter message. Also converts values to other types if specified.
             * @param message Parameter
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.Parameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Parameter to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Parameter {

            /** Enum representing types of Parameter. */
            enum ParameterType {
                Static = 0,
                Dynamic = 1,
                Special_String = 2,
                Special_Table = 3,
                Table = 4
            }
        }

        /** Properties of a ProtoComment. */
        interface IProtoComment {

            /** Text representing the Comment. */
            text?: (string|null);
        }

        /** A proto object representing Comment. */
        class ProtoComment implements IProtoComment {

            /**
             * Constructs a new ProtoComment.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IProtoComment);

            /** Text representing the Comment. */
            public text: string;

            /**
             * Creates a new ProtoComment instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtoComment instance
             */
            public static create(properties?: gauge.messages.IProtoComment): gauge.messages.ProtoComment;

            /**
             * Encodes the specified ProtoComment message. Does not implicitly {@link gauge.messages.ProtoComment.verify|verify} messages.
             * @param message ProtoComment message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IProtoComment, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtoComment message, length delimited. Does not implicitly {@link gauge.messages.ProtoComment.verify|verify} messages.
             * @param message ProtoComment message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IProtoComment, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtoComment message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtoComment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ProtoComment;

            /**
             * Decodes a ProtoComment message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtoComment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ProtoComment;

            /**
             * Verifies a ProtoComment message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtoComment message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtoComment
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ProtoComment;

            /**
             * Creates a plain object from a ProtoComment message. Also converts values to other types if specified.
             * @param message ProtoComment
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ProtoComment, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtoComment to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProtoTable. */
        interface IProtoTable {

            /** Contains the Headers for the table */
            headers?: (gauge.messages.IProtoTableRow|null);

            /** Contains the Rows for the table */
            rows?: (gauge.messages.IProtoTableRow[]|null);
        }

        /** A proto object representing Table. */
        class ProtoTable implements IProtoTable {

            /**
             * Constructs a new ProtoTable.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IProtoTable);

            /** Contains the Headers for the table */
            public headers?: (gauge.messages.IProtoTableRow|null);

            /** Contains the Rows for the table */
            public rows: gauge.messages.IProtoTableRow[];

            /**
             * Creates a new ProtoTable instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtoTable instance
             */
            public static create(properties?: gauge.messages.IProtoTable): gauge.messages.ProtoTable;

            /**
             * Encodes the specified ProtoTable message. Does not implicitly {@link gauge.messages.ProtoTable.verify|verify} messages.
             * @param message ProtoTable message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IProtoTable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtoTable message, length delimited. Does not implicitly {@link gauge.messages.ProtoTable.verify|verify} messages.
             * @param message ProtoTable message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IProtoTable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtoTable message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtoTable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ProtoTable;

            /**
             * Decodes a ProtoTable message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtoTable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ProtoTable;

            /**
             * Verifies a ProtoTable message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtoTable message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtoTable
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ProtoTable;

            /**
             * Creates a plain object from a ProtoTable message. Also converts values to other types if specified.
             * @param message ProtoTable
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ProtoTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtoTable to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProtoTableRow. */
        interface IProtoTableRow {

            /** Represents the cells of a given table */
            cells?: (string[]|null);
        }

        /** A proto object representing Table. */
        class ProtoTableRow implements IProtoTableRow {

            /**
             * Constructs a new ProtoTableRow.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IProtoTableRow);

            /** Represents the cells of a given table */
            public cells: string[];

            /**
             * Creates a new ProtoTableRow instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtoTableRow instance
             */
            public static create(properties?: gauge.messages.IProtoTableRow): gauge.messages.ProtoTableRow;

            /**
             * Encodes the specified ProtoTableRow message. Does not implicitly {@link gauge.messages.ProtoTableRow.verify|verify} messages.
             * @param message ProtoTableRow message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IProtoTableRow, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtoTableRow message, length delimited. Does not implicitly {@link gauge.messages.ProtoTableRow.verify|verify} messages.
             * @param message ProtoTableRow message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IProtoTableRow, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtoTableRow message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtoTableRow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ProtoTableRow;

            /**
             * Decodes a ProtoTableRow message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtoTableRow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ProtoTableRow;

            /**
             * Verifies a ProtoTableRow message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtoTableRow message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtoTableRow
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ProtoTableRow;

            /**
             * Creates a plain object from a ProtoTableRow message. Also converts values to other types if specified.
             * @param message ProtoTableRow
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ProtoTableRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtoTableRow to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProtoStepExecutionResult. */
        interface IProtoStepExecutionResult {

            /** The actual result of the execution */
            executionResult?: (gauge.messages.IProtoExecutionResult|null);

            /** Contains a 'before' hook failure message. This happens when the `before_step` hook has an error. */
            preHookFailure?: (gauge.messages.IProtoHookFailure|null);

            /** Contains a 'after' hook failure message. This happens when the `after_step` hook has an error. */
            postHookFailure?: (gauge.messages.IProtoHookFailure|null);

            /** ProtoStepExecutionResult skipped */
            skipped?: (boolean|null);

            /** ProtoStepExecutionResult skippedReason */
            skippedReason?: (string|null);
        }

        /** A proto object representing Step Execution result */
        class ProtoStepExecutionResult implements IProtoStepExecutionResult {

            /**
             * Constructs a new ProtoStepExecutionResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IProtoStepExecutionResult);

            /** The actual result of the execution */
            public executionResult?: (gauge.messages.IProtoExecutionResult|null);

            /** Contains a 'before' hook failure message. This happens when the `before_step` hook has an error. */
            public preHookFailure?: (gauge.messages.IProtoHookFailure|null);

            /** Contains a 'after' hook failure message. This happens when the `after_step` hook has an error. */
            public postHookFailure?: (gauge.messages.IProtoHookFailure|null);

            /** ProtoStepExecutionResult skipped. */
            public skipped: boolean;

            /** ProtoStepExecutionResult skippedReason. */
            public skippedReason: string;

            /**
             * Creates a new ProtoStepExecutionResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtoStepExecutionResult instance
             */
            public static create(properties?: gauge.messages.IProtoStepExecutionResult): gauge.messages.ProtoStepExecutionResult;

            /**
             * Encodes the specified ProtoStepExecutionResult message. Does not implicitly {@link gauge.messages.ProtoStepExecutionResult.verify|verify} messages.
             * @param message ProtoStepExecutionResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IProtoStepExecutionResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtoStepExecutionResult message, length delimited. Does not implicitly {@link gauge.messages.ProtoStepExecutionResult.verify|verify} messages.
             * @param message ProtoStepExecutionResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IProtoStepExecutionResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtoStepExecutionResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtoStepExecutionResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ProtoStepExecutionResult;

            /**
             * Decodes a ProtoStepExecutionResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtoStepExecutionResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ProtoStepExecutionResult;

            /**
             * Verifies a ProtoStepExecutionResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtoStepExecutionResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtoStepExecutionResult
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ProtoStepExecutionResult;

            /**
             * Creates a plain object from a ProtoStepExecutionResult message. Also converts values to other types if specified.
             * @param message ProtoStepExecutionResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ProtoStepExecutionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtoStepExecutionResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProtoExecutionResult. */
        interface IProtoExecutionResult {

            /** Flag to indicate failure */
            failed?: (boolean|null);

            /** Flag to indicate if the error is recoverable from. */
            recoverableError?: (boolean|null);

            /** The actual error message. */
            errorMessage?: (string|null);

            /** Stacktrace of the error */
            stackTrace?: (string|null);

            /** [DEPRECATED, use failedScreenshot] Bytes containing screenshot taken at the time of failure. */
            screenShot?: (Uint8Array|null);

            /** Holds the time taken for executing this scenario. */
            executionTime?: (number|Long|null);

            /** Additional information at exec time to be available on reports */
            message?: (string[]|null);

            /** Type of the Error. Valid values: ASSERTION, VERIFICATION. Default: ASSERTION */
            errorType?: (gauge.messages.ProtoExecutionResult.ErrorType|null);

            /** Bytes containing screenshot taken at the time of failure. */
            failureScreenshot?: (Uint8Array|null);

            /** Bytes array containing screenshots at the time of it invoked */
            screenshots?: (Uint8Array[]|null);
        }

        /** A proto object representing the result of an execution */
        class ProtoExecutionResult implements IProtoExecutionResult {

            /**
             * Constructs a new ProtoExecutionResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IProtoExecutionResult);

            /** Flag to indicate failure */
            public failed: boolean;

            /** Flag to indicate if the error is recoverable from. */
            public recoverableError: boolean;

            /** The actual error message. */
            public errorMessage: string;

            /** Stacktrace of the error */
            public stackTrace: string;

            /** [DEPRECATED, use failedScreenshot] Bytes containing screenshot taken at the time of failure. */
            public screenShot: Uint8Array;

            /** Holds the time taken for executing this scenario. */
            public executionTime: (number|Long);

            /** Additional information at exec time to be available on reports */
            public message: string[];

            /** Type of the Error. Valid values: ASSERTION, VERIFICATION. Default: ASSERTION */
            public errorType: gauge.messages.ProtoExecutionResult.ErrorType;

            /** Bytes containing screenshot taken at the time of failure. */
            public failureScreenshot: Uint8Array;

            /** Bytes array containing screenshots at the time of it invoked */
            public screenshots: Uint8Array[];

            /**
             * Creates a new ProtoExecutionResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtoExecutionResult instance
             */
            public static create(properties?: gauge.messages.IProtoExecutionResult): gauge.messages.ProtoExecutionResult;

            /**
             * Encodes the specified ProtoExecutionResult message. Does not implicitly {@link gauge.messages.ProtoExecutionResult.verify|verify} messages.
             * @param message ProtoExecutionResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IProtoExecutionResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtoExecutionResult message, length delimited. Does not implicitly {@link gauge.messages.ProtoExecutionResult.verify|verify} messages.
             * @param message ProtoExecutionResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IProtoExecutionResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtoExecutionResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtoExecutionResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ProtoExecutionResult;

            /**
             * Decodes a ProtoExecutionResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtoExecutionResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ProtoExecutionResult;

            /**
             * Verifies a ProtoExecutionResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtoExecutionResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtoExecutionResult
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ProtoExecutionResult;

            /**
             * Creates a plain object from a ProtoExecutionResult message. Also converts values to other types if specified.
             * @param message ProtoExecutionResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ProtoExecutionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtoExecutionResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ProtoExecutionResult {

            /** ErrorType enum. */
            enum ErrorType {
                ASSERTION = 0,
                VERIFICATION = 1
            }
        }

        /** Properties of a ProtoHookFailure. */
        interface IProtoHookFailure {

            /** Stacktrace from the failure */
            stackTrace?: (string|null);

            /** Error message from the failure */
            errorMessage?: (string|null);

            /** [DEPRECATED, use failedScreenshot] Bytes holding the screenshot taken at the time of failure. */
            screenShot?: (Uint8Array|null);

            /** ProtoHookFailure tableRowIndex */
            tableRowIndex?: (number|null);

            /** Bytes holding the screenshot taken at the time of failure. */
            failureScreenshot?: (Uint8Array|null);
        }

        /** Used to hold failure information for before_suite, before_spec, before_scenario and before_spec hooks. */
        class ProtoHookFailure implements IProtoHookFailure {

            /**
             * Constructs a new ProtoHookFailure.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IProtoHookFailure);

            /** Stacktrace from the failure */
            public stackTrace: string;

            /** Error message from the failure */
            public errorMessage: string;

            /** [DEPRECATED, use failedScreenshot] Bytes holding the screenshot taken at the time of failure. */
            public screenShot: Uint8Array;

            /** ProtoHookFailure tableRowIndex. */
            public tableRowIndex: number;

            /** Bytes holding the screenshot taken at the time of failure. */
            public failureScreenshot: Uint8Array;

            /**
             * Creates a new ProtoHookFailure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtoHookFailure instance
             */
            public static create(properties?: gauge.messages.IProtoHookFailure): gauge.messages.ProtoHookFailure;

            /**
             * Encodes the specified ProtoHookFailure message. Does not implicitly {@link gauge.messages.ProtoHookFailure.verify|verify} messages.
             * @param message ProtoHookFailure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IProtoHookFailure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtoHookFailure message, length delimited. Does not implicitly {@link gauge.messages.ProtoHookFailure.verify|verify} messages.
             * @param message ProtoHookFailure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IProtoHookFailure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtoHookFailure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtoHookFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ProtoHookFailure;

            /**
             * Decodes a ProtoHookFailure message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtoHookFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ProtoHookFailure;

            /**
             * Verifies a ProtoHookFailure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtoHookFailure message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtoHookFailure
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ProtoHookFailure;

            /**
             * Creates a plain object from a ProtoHookFailure message. Also converts values to other types if specified.
             * @param message ProtoHookFailure
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ProtoHookFailure, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtoHookFailure to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProtoSuiteResult. */
        interface IProtoSuiteResult {

            /** Contains the result from the execution */
            specResults?: (gauge.messages.IProtoSpecResult[]|null);

            /** Contains a 'before' hook failure message. This happens when the `before_suite` hook has an error */
            preHookFailure?: (gauge.messages.IProtoHookFailure|null);

            /** Contains a 'after' hook failure message. This happens when the `after_suite` hook has an error */
            postHookFailure?: (gauge.messages.IProtoHookFailure|null);

            /** Flag to indicate failure */
            failed?: (boolean|null);

            /** Holds the count of number of Specifications that failed. */
            specsFailedCount?: (number|null);

            /** Holds the time taken for executing the whole suite. */
            executionTime?: (number|Long|null);

            /** Holds a metric indicating the success rate of the execution. */
            successRate?: (number|null);

            /** The environment against which execution was done */
            environment?: (string|null);

            /** Tag expression used for filtering specification */
            tags?: (string|null);

            /** Project name */
            projectName?: (string|null);

            /** Timestamp of when execution started */
            timestamp?: (string|null);

            /** ProtoSuiteResult specsSkippedCount */
            specsSkippedCount?: (number|null);

            /** Additional information at pre hook exec time to be available on reports */
            preHookMessages?: (string[]|null);

            /** Additional information at post hook exec time to be available on reports */
            postHookMessages?: (string[]|null);

            /** [DEPRECATED, use preHookMessages] Additional information at pre hook exec time to be available on reports */
            preHookMessage?: (string[]|null);

            /** [DEPRECATED, use postHookMessages] Additional information at post hook exec time to be available on reports */
            postHookMessage?: (string[]|null);

            /** Capture Screenshot at pre hook exec time to be available on reports */
            preHookScreenshots?: (Uint8Array[]|null);

            /** Capture Screenshot at post hook exec time to be available on reports */
            postHookScreenshots?: (Uint8Array[]|null);

            /** ProtoSuiteResult chunked */
            chunked?: (boolean|null);

            /** ProtoSuiteResult chunkSize */
            chunkSize?: (number|Long|null);
        }

        /** A proto object representing the result of entire Suite execution. */
        class ProtoSuiteResult implements IProtoSuiteResult {

            /**
             * Constructs a new ProtoSuiteResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IProtoSuiteResult);

            /** Contains the result from the execution */
            public specResults: gauge.messages.IProtoSpecResult[];

            /** Contains a 'before' hook failure message. This happens when the `before_suite` hook has an error */
            public preHookFailure?: (gauge.messages.IProtoHookFailure|null);

            /** Contains a 'after' hook failure message. This happens when the `after_suite` hook has an error */
            public postHookFailure?: (gauge.messages.IProtoHookFailure|null);

            /** Flag to indicate failure */
            public failed: boolean;

            /** Holds the count of number of Specifications that failed. */
            public specsFailedCount: number;

            /** Holds the time taken for executing the whole suite. */
            public executionTime: (number|Long);

            /** Holds a metric indicating the success rate of the execution. */
            public successRate: number;

            /** The environment against which execution was done */
            public environment: string;

            /** Tag expression used for filtering specification */
            public tags: string;

            /** Project name */
            public projectName: string;

            /** Timestamp of when execution started */
            public timestamp: string;

            /** ProtoSuiteResult specsSkippedCount. */
            public specsSkippedCount: number;

            /** Additional information at pre hook exec time to be available on reports */
            public preHookMessages: string[];

            /** Additional information at post hook exec time to be available on reports */
            public postHookMessages: string[];

            /** [DEPRECATED, use preHookMessages] Additional information at pre hook exec time to be available on reports */
            public preHookMessage: string[];

            /** [DEPRECATED, use postHookMessages] Additional information at post hook exec time to be available on reports */
            public postHookMessage: string[];

            /** Capture Screenshot at pre hook exec time to be available on reports */
            public preHookScreenshots: Uint8Array[];

            /** Capture Screenshot at post hook exec time to be available on reports */
            public postHookScreenshots: Uint8Array[];

            /** ProtoSuiteResult chunked. */
            public chunked: boolean;

            /** ProtoSuiteResult chunkSize. */
            public chunkSize: (number|Long);

            /**
             * Creates a new ProtoSuiteResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtoSuiteResult instance
             */
            public static create(properties?: gauge.messages.IProtoSuiteResult): gauge.messages.ProtoSuiteResult;

            /**
             * Encodes the specified ProtoSuiteResult message. Does not implicitly {@link gauge.messages.ProtoSuiteResult.verify|verify} messages.
             * @param message ProtoSuiteResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IProtoSuiteResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtoSuiteResult message, length delimited. Does not implicitly {@link gauge.messages.ProtoSuiteResult.verify|verify} messages.
             * @param message ProtoSuiteResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IProtoSuiteResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtoSuiteResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtoSuiteResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ProtoSuiteResult;

            /**
             * Decodes a ProtoSuiteResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtoSuiteResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ProtoSuiteResult;

            /**
             * Verifies a ProtoSuiteResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtoSuiteResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtoSuiteResult
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ProtoSuiteResult;

            /**
             * Creates a plain object from a ProtoSuiteResult message. Also converts values to other types if specified.
             * @param message ProtoSuiteResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ProtoSuiteResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtoSuiteResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProtoSpecResult. */
        interface IProtoSpecResult {

            /** Represents the corresponding Specification */
            protoSpec?: (gauge.messages.IProtoSpec|null);

            /** Holds the number of Scenarios executed */
            scenarioCount?: (number|null);

            /** Holds the number of Scenarios failed */
            scenarioFailedCount?: (number|null);

            /** Flag to indicate failure */
            failed?: (boolean|null);

            /** Holds the row numbers, which caused the execution to fail. */
            failedDataTableRows?: (number[]|null);

            /** Holds the time taken for executing the spec. */
            executionTime?: (number|Long|null);

            /** Flag to indicate if spec is skipped */
            skipped?: (boolean|null);

            /** Holds the number of Scenarios skipped */
            scenarioSkippedCount?: (number|null);

            /** Holds the row numbers, for which the execution skipped. */
            skippedDataTableRows?: (number[]|null);

            /** Holds parse, validation and skipped errors. */
            errors?: (gauge.messages.IError[]|null);
        }

        /** A proto object representing the result of Spec execution. */
        class ProtoSpecResult implements IProtoSpecResult {

            /**
             * Constructs a new ProtoSpecResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IProtoSpecResult);

            /** Represents the corresponding Specification */
            public protoSpec?: (gauge.messages.IProtoSpec|null);

            /** Holds the number of Scenarios executed */
            public scenarioCount: number;

            /** Holds the number of Scenarios failed */
            public scenarioFailedCount: number;

            /** Flag to indicate failure */
            public failed: boolean;

            /** Holds the row numbers, which caused the execution to fail. */
            public failedDataTableRows: number[];

            /** Holds the time taken for executing the spec. */
            public executionTime: (number|Long);

            /** Flag to indicate if spec is skipped */
            public skipped: boolean;

            /** Holds the number of Scenarios skipped */
            public scenarioSkippedCount: number;

            /** Holds the row numbers, for which the execution skipped. */
            public skippedDataTableRows: number[];

            /** Holds parse, validation and skipped errors. */
            public errors: gauge.messages.IError[];

            /**
             * Creates a new ProtoSpecResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtoSpecResult instance
             */
            public static create(properties?: gauge.messages.IProtoSpecResult): gauge.messages.ProtoSpecResult;

            /**
             * Encodes the specified ProtoSpecResult message. Does not implicitly {@link gauge.messages.ProtoSpecResult.verify|verify} messages.
             * @param message ProtoSpecResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IProtoSpecResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtoSpecResult message, length delimited. Does not implicitly {@link gauge.messages.ProtoSpecResult.verify|verify} messages.
             * @param message ProtoSpecResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IProtoSpecResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtoSpecResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtoSpecResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ProtoSpecResult;

            /**
             * Decodes a ProtoSpecResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtoSpecResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ProtoSpecResult;

            /**
             * Verifies a ProtoSpecResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtoSpecResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtoSpecResult
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ProtoSpecResult;

            /**
             * Creates a plain object from a ProtoSpecResult message. Also converts values to other types if specified.
             * @param message ProtoSpecResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ProtoSpecResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtoSpecResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Error. */
        interface IError {

            /** Holds the type of error */
            type?: (gauge.messages.Error.ErrorType|null);

            /** Holds the filename. */
            filename?: (string|null);

            /** Holds the line number of the error in file. */
            lineNumber?: (number|null);

            /** Holds the error message. */
            message?: (string|null);
        }

        /** A proto object representing an error in spec/Scenario. */
        class Error implements IError {

            /**
             * Constructs a new Error.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IError);

            /** Holds the type of error */
            public type: gauge.messages.Error.ErrorType;

            /** Holds the filename. */
            public filename: string;

            /** Holds the line number of the error in file. */
            public lineNumber: number;

            /** Holds the error message. */
            public message: string;

            /**
             * Creates a new Error instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Error instance
             */
            public static create(properties?: gauge.messages.IError): gauge.messages.Error;

            /**
             * Encodes the specified Error message. Does not implicitly {@link gauge.messages.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link gauge.messages.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.Error;

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.Error;

            /**
             * Verifies an Error message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Error
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.Error;

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @param message Error
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Error to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Error {

            /** ErrorType enum. */
            enum ErrorType {
                PARSE_ERROR = 0,
                VALIDATION_ERROR = 1
            }
        }

        /** Properties of a ProtoStepValue. */
        interface IProtoStepValue {

            /** The actual string value describing he Step */
            stepValue?: (string|null);

            /** The parameterized string value describing he Step. The parameters are replaced with placeholders. */
            parameterizedStepValue?: (string|null);

            /** A collection of strings representing the parameters. */
            parameters?: (string[]|null);
        }

        /** A proto object representing a Step value. */
        class ProtoStepValue implements IProtoStepValue {

            /**
             * Constructs a new ProtoStepValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IProtoStepValue);

            /** The actual string value describing he Step */
            public stepValue: string;

            /** The parameterized string value describing he Step. The parameters are replaced with placeholders. */
            public parameterizedStepValue: string;

            /** A collection of strings representing the parameters. */
            public parameters: string[];

            /**
             * Creates a new ProtoStepValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtoStepValue instance
             */
            public static create(properties?: gauge.messages.IProtoStepValue): gauge.messages.ProtoStepValue;

            /**
             * Encodes the specified ProtoStepValue message. Does not implicitly {@link gauge.messages.ProtoStepValue.verify|verify} messages.
             * @param message ProtoStepValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IProtoStepValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtoStepValue message, length delimited. Does not implicitly {@link gauge.messages.ProtoStepValue.verify|verify} messages.
             * @param message ProtoStepValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IProtoStepValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtoStepValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtoStepValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ProtoStepValue;

            /**
             * Decodes a ProtoStepValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtoStepValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ProtoStepValue;

            /**
             * Verifies a ProtoStepValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtoStepValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtoStepValue
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ProtoStepValue;

            /**
             * Creates a plain object from a ProtoStepValue message. Also converts values to other types if specified.
             * @param message ProtoStepValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ProtoStepValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtoStepValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: gauge.messages.IEmpty): gauge.messages.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link gauge.messages.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link gauge.messages.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a lspService */
        class lspService extends $protobuf.rpc.Service {

            /**
             * Constructs a new lspService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new lspService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): lspService;

            /**
             * Calls GetStepNames.
             * @param request StepNamesRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and StepNamesResponse
             */
            public getStepNames(request: gauge.messages.IStepNamesRequest, callback: gauge.messages.lspService.GetStepNamesCallback): void;

            /**
             * Calls GetStepNames.
             * @param request StepNamesRequest message or plain object
             * @returns Promise
             */
            public getStepNames(request: gauge.messages.IStepNamesRequest): Promise<gauge.messages.StepNamesResponse>;

            /**
             * Calls CacheFile.
             * @param request CacheFileRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public cacheFile(request: gauge.messages.ICacheFileRequest, callback: gauge.messages.lspService.CacheFileCallback): void;

            /**
             * Calls CacheFile.
             * @param request CacheFileRequest message or plain object
             * @returns Promise
             */
            public cacheFile(request: gauge.messages.ICacheFileRequest): Promise<gauge.messages.Empty>;

            /**
             * Calls GetStepPositions.
             * @param request StepPositionsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and StepPositionsResponse
             */
            public getStepPositions(request: gauge.messages.IStepPositionsRequest, callback: gauge.messages.lspService.GetStepPositionsCallback): void;

            /**
             * Calls GetStepPositions.
             * @param request StepPositionsRequest message or plain object
             * @returns Promise
             */
            public getStepPositions(request: gauge.messages.IStepPositionsRequest): Promise<gauge.messages.StepPositionsResponse>;

            /**
             * Calls GetImplementationFiles.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and ImplementationFileListResponse
             */
            public getImplementationFiles(request: gauge.messages.IEmpty, callback: gauge.messages.lspService.GetImplementationFilesCallback): void;

            /**
             * Calls GetImplementationFiles.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getImplementationFiles(request: gauge.messages.IEmpty): Promise<gauge.messages.ImplementationFileListResponse>;

            /**
             * Calls ImplementStub.
             * @param request StubImplementationCodeRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and FileDiff
             */
            public implementStub(request: gauge.messages.IStubImplementationCodeRequest, callback: gauge.messages.lspService.ImplementStubCallback): void;

            /**
             * Calls ImplementStub.
             * @param request StubImplementationCodeRequest message or plain object
             * @returns Promise
             */
            public implementStub(request: gauge.messages.IStubImplementationCodeRequest): Promise<gauge.messages.FileDiff>;

            /**
             * Calls ValidateStep.
             * @param request StepValidateRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and StepValidateResponse
             */
            public validateStep(request: gauge.messages.IStepValidateRequest, callback: gauge.messages.lspService.ValidateStepCallback): void;

            /**
             * Calls ValidateStep.
             * @param request StepValidateRequest message or plain object
             * @returns Promise
             */
            public validateStep(request: gauge.messages.IStepValidateRequest): Promise<gauge.messages.StepValidateResponse>;

            /**
             * Calls Refactor.
             * @param request RefactorRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and RefactorResponse
             */
            public refactor(request: gauge.messages.IRefactorRequest, callback: gauge.messages.lspService.RefactorCallback): void;

            /**
             * Calls Refactor.
             * @param request RefactorRequest message or plain object
             * @returns Promise
             */
            public refactor(request: gauge.messages.IRefactorRequest): Promise<gauge.messages.RefactorResponse>;

            /**
             * Calls GetStepName.
             * @param request StepNameRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and StepNameResponse
             */
            public getStepName(request: gauge.messages.IStepNameRequest, callback: gauge.messages.lspService.GetStepNameCallback): void;

            /**
             * Calls GetStepName.
             * @param request StepNameRequest message or plain object
             * @returns Promise
             */
            public getStepName(request: gauge.messages.IStepNameRequest): Promise<gauge.messages.StepNameResponse>;

            /**
             * Calls GetGlobPatterns.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and ImplementationFileGlobPatternResponse
             */
            public getGlobPatterns(request: gauge.messages.IEmpty, callback: gauge.messages.lspService.GetGlobPatternsCallback): void;

            /**
             * Calls GetGlobPatterns.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getGlobPatterns(request: gauge.messages.IEmpty): Promise<gauge.messages.ImplementationFileGlobPatternResponse>;

            /**
             * Calls KillProcess.
             * @param request KillProcessRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public killProcess(request: gauge.messages.IKillProcessRequest, callback: gauge.messages.lspService.KillProcessCallback): void;

            /**
             * Calls KillProcess.
             * @param request KillProcessRequest message or plain object
             * @returns Promise
             */
            public killProcess(request: gauge.messages.IKillProcessRequest): Promise<gauge.messages.Empty>;
        }

        namespace lspService {

            /**
             * Callback as used by {@link gauge.messages.lspService#getStepNames}.
             * @param error Error, if any
             * @param [response] StepNamesResponse
             */
            type GetStepNamesCallback = (error: (Error|null), response?: gauge.messages.StepNamesResponse) => void;

            /**
             * Callback as used by {@link gauge.messages.lspService#cacheFile}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CacheFileCallback = (error: (Error|null), response?: gauge.messages.Empty) => void;

            /**
             * Callback as used by {@link gauge.messages.lspService#getStepPositions}.
             * @param error Error, if any
             * @param [response] StepPositionsResponse
             */
            type GetStepPositionsCallback = (error: (Error|null), response?: gauge.messages.StepPositionsResponse) => void;

            /**
             * Callback as used by {@link gauge.messages.lspService#getImplementationFiles}.
             * @param error Error, if any
             * @param [response] ImplementationFileListResponse
             */
            type GetImplementationFilesCallback = (error: (Error|null), response?: gauge.messages.ImplementationFileListResponse) => void;

            /**
             * Callback as used by {@link gauge.messages.lspService#implementStub}.
             * @param error Error, if any
             * @param [response] FileDiff
             */
            type ImplementStubCallback = (error: (Error|null), response?: gauge.messages.FileDiff) => void;

            /**
             * Callback as used by {@link gauge.messages.lspService#validateStep}.
             * @param error Error, if any
             * @param [response] StepValidateResponse
             */
            type ValidateStepCallback = (error: (Error|null), response?: gauge.messages.StepValidateResponse) => void;

            /**
             * Callback as used by {@link gauge.messages.lspService#refactor}.
             * @param error Error, if any
             * @param [response] RefactorResponse
             */
            type RefactorCallback = (error: (Error|null), response?: gauge.messages.RefactorResponse) => void;

            /**
             * Callback as used by {@link gauge.messages.lspService#getStepName}.
             * @param error Error, if any
             * @param [response] StepNameResponse
             */
            type GetStepNameCallback = (error: (Error|null), response?: gauge.messages.StepNameResponse) => void;

            /**
             * Callback as used by {@link gauge.messages.lspService#getGlobPatterns}.
             * @param error Error, if any
             * @param [response] ImplementationFileGlobPatternResponse
             */
            type GetGlobPatternsCallback = (error: (Error|null), response?: gauge.messages.ImplementationFileGlobPatternResponse) => void;

            /**
             * Callback as used by {@link gauge.messages.lspService#killProcess}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type KillProcessCallback = (error: (Error|null), response?: gauge.messages.Empty) => void;
        }

        /** Properties of a KillProcessRequest. */
        interface IKillProcessRequest {
        }

        /** Default request. Tells the runner to shutdown. */
        class KillProcessRequest implements IKillProcessRequest {

            /**
             * Constructs a new KillProcessRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IKillProcessRequest);

            /**
             * Creates a new KillProcessRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KillProcessRequest instance
             */
            public static create(properties?: gauge.messages.IKillProcessRequest): gauge.messages.KillProcessRequest;

            /**
             * Encodes the specified KillProcessRequest message. Does not implicitly {@link gauge.messages.KillProcessRequest.verify|verify} messages.
             * @param message KillProcessRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IKillProcessRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KillProcessRequest message, length delimited. Does not implicitly {@link gauge.messages.KillProcessRequest.verify|verify} messages.
             * @param message KillProcessRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IKillProcessRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KillProcessRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KillProcessRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.KillProcessRequest;

            /**
             * Decodes a KillProcessRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KillProcessRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.KillProcessRequest;

            /**
             * Verifies a KillProcessRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KillProcessRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KillProcessRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.KillProcessRequest;

            /**
             * Creates a plain object from a KillProcessRequest message. Also converts values to other types if specified.
             * @param message KillProcessRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.KillProcessRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KillProcessRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExecutionStatusResponse. */
        interface IExecutionStatusResponse {

            /** ExecutionStatusResponse executionResult */
            executionResult?: (gauge.messages.IProtoExecutionResult|null);
        }

        /** usually step execution, hooks etc will return this */
        class ExecutionStatusResponse implements IExecutionStatusResponse {

            /**
             * Constructs a new ExecutionStatusResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IExecutionStatusResponse);

            /** ExecutionStatusResponse executionResult. */
            public executionResult?: (gauge.messages.IProtoExecutionResult|null);

            /**
             * Creates a new ExecutionStatusResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionStatusResponse instance
             */
            public static create(properties?: gauge.messages.IExecutionStatusResponse): gauge.messages.ExecutionStatusResponse;

            /**
             * Encodes the specified ExecutionStatusResponse message. Does not implicitly {@link gauge.messages.ExecutionStatusResponse.verify|verify} messages.
             * @param message ExecutionStatusResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IExecutionStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecutionStatusResponse message, length delimited. Does not implicitly {@link gauge.messages.ExecutionStatusResponse.verify|verify} messages.
             * @param message ExecutionStatusResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IExecutionStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionStatusResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionStatusResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ExecutionStatusResponse;

            /**
             * Decodes an ExecutionStatusResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecutionStatusResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ExecutionStatusResponse;

            /**
             * Verifies an ExecutionStatusResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecutionStatusResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecutionStatusResponse
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ExecutionStatusResponse;

            /**
             * Creates a plain object from an ExecutionStatusResponse message. Also converts values to other types if specified.
             * @param message ExecutionStatusResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ExecutionStatusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecutionStatusResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExecutionStartingRequest. */
        interface IExecutionStartingRequest {

            /** ExecutionStartingRequest currentExecutionInfo */
            currentExecutionInfo?: (gauge.messages.IExecutionInfo|null);
        }

        /** Sent at start of Suite Execution. Tells the runner to execute `before_suite` hook. */
        class ExecutionStartingRequest implements IExecutionStartingRequest {

            /**
             * Constructs a new ExecutionStartingRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IExecutionStartingRequest);

            /** ExecutionStartingRequest currentExecutionInfo. */
            public currentExecutionInfo?: (gauge.messages.IExecutionInfo|null);

            /**
             * Creates a new ExecutionStartingRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionStartingRequest instance
             */
            public static create(properties?: gauge.messages.IExecutionStartingRequest): gauge.messages.ExecutionStartingRequest;

            /**
             * Encodes the specified ExecutionStartingRequest message. Does not implicitly {@link gauge.messages.ExecutionStartingRequest.verify|verify} messages.
             * @param message ExecutionStartingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IExecutionStartingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecutionStartingRequest message, length delimited. Does not implicitly {@link gauge.messages.ExecutionStartingRequest.verify|verify} messages.
             * @param message ExecutionStartingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IExecutionStartingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionStartingRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionStartingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ExecutionStartingRequest;

            /**
             * Decodes an ExecutionStartingRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecutionStartingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ExecutionStartingRequest;

            /**
             * Verifies an ExecutionStartingRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecutionStartingRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecutionStartingRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ExecutionStartingRequest;

            /**
             * Creates a plain object from an ExecutionStartingRequest message. Also converts values to other types if specified.
             * @param message ExecutionStartingRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ExecutionStartingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecutionStartingRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExecutionEndingRequest. */
        interface IExecutionEndingRequest {

            /** ExecutionEndingRequest currentExecutionInfo */
            currentExecutionInfo?: (gauge.messages.IExecutionInfo|null);
        }

        /** Sent at end of Suite Execution. Tells the runner to execute `after_suite` hook. */
        class ExecutionEndingRequest implements IExecutionEndingRequest {

            /**
             * Constructs a new ExecutionEndingRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IExecutionEndingRequest);

            /** ExecutionEndingRequest currentExecutionInfo. */
            public currentExecutionInfo?: (gauge.messages.IExecutionInfo|null);

            /**
             * Creates a new ExecutionEndingRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionEndingRequest instance
             */
            public static create(properties?: gauge.messages.IExecutionEndingRequest): gauge.messages.ExecutionEndingRequest;

            /**
             * Encodes the specified ExecutionEndingRequest message. Does not implicitly {@link gauge.messages.ExecutionEndingRequest.verify|verify} messages.
             * @param message ExecutionEndingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IExecutionEndingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecutionEndingRequest message, length delimited. Does not implicitly {@link gauge.messages.ExecutionEndingRequest.verify|verify} messages.
             * @param message ExecutionEndingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IExecutionEndingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionEndingRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionEndingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ExecutionEndingRequest;

            /**
             * Decodes an ExecutionEndingRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecutionEndingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ExecutionEndingRequest;

            /**
             * Verifies an ExecutionEndingRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecutionEndingRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecutionEndingRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ExecutionEndingRequest;

            /**
             * Creates a plain object from an ExecutionEndingRequest message. Also converts values to other types if specified.
             * @param message ExecutionEndingRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ExecutionEndingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecutionEndingRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SpecExecutionStartingRequest. */
        interface ISpecExecutionStartingRequest {

            /** SpecExecutionStartingRequest currentExecutionInfo */
            currentExecutionInfo?: (gauge.messages.IExecutionInfo|null);
        }

        /** Sent at start of Spec Execution. Tells the runner to execute `before_spec` hook. */
        class SpecExecutionStartingRequest implements ISpecExecutionStartingRequest {

            /**
             * Constructs a new SpecExecutionStartingRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.ISpecExecutionStartingRequest);

            /** SpecExecutionStartingRequest currentExecutionInfo. */
            public currentExecutionInfo?: (gauge.messages.IExecutionInfo|null);

            /**
             * Creates a new SpecExecutionStartingRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SpecExecutionStartingRequest instance
             */
            public static create(properties?: gauge.messages.ISpecExecutionStartingRequest): gauge.messages.SpecExecutionStartingRequest;

            /**
             * Encodes the specified SpecExecutionStartingRequest message. Does not implicitly {@link gauge.messages.SpecExecutionStartingRequest.verify|verify} messages.
             * @param message SpecExecutionStartingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.ISpecExecutionStartingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SpecExecutionStartingRequest message, length delimited. Does not implicitly {@link gauge.messages.SpecExecutionStartingRequest.verify|verify} messages.
             * @param message SpecExecutionStartingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.ISpecExecutionStartingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SpecExecutionStartingRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SpecExecutionStartingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.SpecExecutionStartingRequest;

            /**
             * Decodes a SpecExecutionStartingRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SpecExecutionStartingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.SpecExecutionStartingRequest;

            /**
             * Verifies a SpecExecutionStartingRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SpecExecutionStartingRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SpecExecutionStartingRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.SpecExecutionStartingRequest;

            /**
             * Creates a plain object from a SpecExecutionStartingRequest message. Also converts values to other types if specified.
             * @param message SpecExecutionStartingRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.SpecExecutionStartingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SpecExecutionStartingRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SpecExecutionEndingRequest. */
        interface ISpecExecutionEndingRequest {

            /** SpecExecutionEndingRequest currentExecutionInfo */
            currentExecutionInfo?: (gauge.messages.IExecutionInfo|null);
        }

        /** Sent at end of Spec Execution. Tells the runner to execute `after_spec` hook. */
        class SpecExecutionEndingRequest implements ISpecExecutionEndingRequest {

            /**
             * Constructs a new SpecExecutionEndingRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.ISpecExecutionEndingRequest);

            /** SpecExecutionEndingRequest currentExecutionInfo. */
            public currentExecutionInfo?: (gauge.messages.IExecutionInfo|null);

            /**
             * Creates a new SpecExecutionEndingRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SpecExecutionEndingRequest instance
             */
            public static create(properties?: gauge.messages.ISpecExecutionEndingRequest): gauge.messages.SpecExecutionEndingRequest;

            /**
             * Encodes the specified SpecExecutionEndingRequest message. Does not implicitly {@link gauge.messages.SpecExecutionEndingRequest.verify|verify} messages.
             * @param message SpecExecutionEndingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.ISpecExecutionEndingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SpecExecutionEndingRequest message, length delimited. Does not implicitly {@link gauge.messages.SpecExecutionEndingRequest.verify|verify} messages.
             * @param message SpecExecutionEndingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.ISpecExecutionEndingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SpecExecutionEndingRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SpecExecutionEndingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.SpecExecutionEndingRequest;

            /**
             * Decodes a SpecExecutionEndingRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SpecExecutionEndingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.SpecExecutionEndingRequest;

            /**
             * Verifies a SpecExecutionEndingRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SpecExecutionEndingRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SpecExecutionEndingRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.SpecExecutionEndingRequest;

            /**
             * Creates a plain object from a SpecExecutionEndingRequest message. Also converts values to other types if specified.
             * @param message SpecExecutionEndingRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.SpecExecutionEndingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SpecExecutionEndingRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ScenarioExecutionStartingRequest. */
        interface IScenarioExecutionStartingRequest {

            /** ScenarioExecutionStartingRequest currentExecutionInfo */
            currentExecutionInfo?: (gauge.messages.IExecutionInfo|null);
        }

        /** Sent at start of Scenario Execution. Tells the runner to execute `before_scenario` hook. */
        class ScenarioExecutionStartingRequest implements IScenarioExecutionStartingRequest {

            /**
             * Constructs a new ScenarioExecutionStartingRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IScenarioExecutionStartingRequest);

            /** ScenarioExecutionStartingRequest currentExecutionInfo. */
            public currentExecutionInfo?: (gauge.messages.IExecutionInfo|null);

            /**
             * Creates a new ScenarioExecutionStartingRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ScenarioExecutionStartingRequest instance
             */
            public static create(properties?: gauge.messages.IScenarioExecutionStartingRequest): gauge.messages.ScenarioExecutionStartingRequest;

            /**
             * Encodes the specified ScenarioExecutionStartingRequest message. Does not implicitly {@link gauge.messages.ScenarioExecutionStartingRequest.verify|verify} messages.
             * @param message ScenarioExecutionStartingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IScenarioExecutionStartingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ScenarioExecutionStartingRequest message, length delimited. Does not implicitly {@link gauge.messages.ScenarioExecutionStartingRequest.verify|verify} messages.
             * @param message ScenarioExecutionStartingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IScenarioExecutionStartingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ScenarioExecutionStartingRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ScenarioExecutionStartingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ScenarioExecutionStartingRequest;

            /**
             * Decodes a ScenarioExecutionStartingRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ScenarioExecutionStartingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ScenarioExecutionStartingRequest;

            /**
             * Verifies a ScenarioExecutionStartingRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ScenarioExecutionStartingRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ScenarioExecutionStartingRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ScenarioExecutionStartingRequest;

            /**
             * Creates a plain object from a ScenarioExecutionStartingRequest message. Also converts values to other types if specified.
             * @param message ScenarioExecutionStartingRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ScenarioExecutionStartingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ScenarioExecutionStartingRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ScenarioExecutionEndingRequest. */
        interface IScenarioExecutionEndingRequest {

            /** ScenarioExecutionEndingRequest currentExecutionInfo */
            currentExecutionInfo?: (gauge.messages.IExecutionInfo|null);
        }

        /** Sent at end of Scenario Execution. Tells the runner to execute `after_scenario` hook. */
        class ScenarioExecutionEndingRequest implements IScenarioExecutionEndingRequest {

            /**
             * Constructs a new ScenarioExecutionEndingRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IScenarioExecutionEndingRequest);

            /** ScenarioExecutionEndingRequest currentExecutionInfo. */
            public currentExecutionInfo?: (gauge.messages.IExecutionInfo|null);

            /**
             * Creates a new ScenarioExecutionEndingRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ScenarioExecutionEndingRequest instance
             */
            public static create(properties?: gauge.messages.IScenarioExecutionEndingRequest): gauge.messages.ScenarioExecutionEndingRequest;

            /**
             * Encodes the specified ScenarioExecutionEndingRequest message. Does not implicitly {@link gauge.messages.ScenarioExecutionEndingRequest.verify|verify} messages.
             * @param message ScenarioExecutionEndingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IScenarioExecutionEndingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ScenarioExecutionEndingRequest message, length delimited. Does not implicitly {@link gauge.messages.ScenarioExecutionEndingRequest.verify|verify} messages.
             * @param message ScenarioExecutionEndingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IScenarioExecutionEndingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ScenarioExecutionEndingRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ScenarioExecutionEndingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ScenarioExecutionEndingRequest;

            /**
             * Decodes a ScenarioExecutionEndingRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ScenarioExecutionEndingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ScenarioExecutionEndingRequest;

            /**
             * Verifies a ScenarioExecutionEndingRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ScenarioExecutionEndingRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ScenarioExecutionEndingRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ScenarioExecutionEndingRequest;

            /**
             * Creates a plain object from a ScenarioExecutionEndingRequest message. Also converts values to other types if specified.
             * @param message ScenarioExecutionEndingRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ScenarioExecutionEndingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ScenarioExecutionEndingRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StepExecutionStartingRequest. */
        interface IStepExecutionStartingRequest {

            /** StepExecutionStartingRequest currentExecutionInfo */
            currentExecutionInfo?: (gauge.messages.IExecutionInfo|null);
        }

        /** Sent at start of Step Execution. Tells the runner to execute `before_step` hook. */
        class StepExecutionStartingRequest implements IStepExecutionStartingRequest {

            /**
             * Constructs a new StepExecutionStartingRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IStepExecutionStartingRequest);

            /** StepExecutionStartingRequest currentExecutionInfo. */
            public currentExecutionInfo?: (gauge.messages.IExecutionInfo|null);

            /**
             * Creates a new StepExecutionStartingRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StepExecutionStartingRequest instance
             */
            public static create(properties?: gauge.messages.IStepExecutionStartingRequest): gauge.messages.StepExecutionStartingRequest;

            /**
             * Encodes the specified StepExecutionStartingRequest message. Does not implicitly {@link gauge.messages.StepExecutionStartingRequest.verify|verify} messages.
             * @param message StepExecutionStartingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IStepExecutionStartingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StepExecutionStartingRequest message, length delimited. Does not implicitly {@link gauge.messages.StepExecutionStartingRequest.verify|verify} messages.
             * @param message StepExecutionStartingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IStepExecutionStartingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StepExecutionStartingRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StepExecutionStartingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.StepExecutionStartingRequest;

            /**
             * Decodes a StepExecutionStartingRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StepExecutionStartingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.StepExecutionStartingRequest;

            /**
             * Verifies a StepExecutionStartingRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StepExecutionStartingRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StepExecutionStartingRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.StepExecutionStartingRequest;

            /**
             * Creates a plain object from a StepExecutionStartingRequest message. Also converts values to other types if specified.
             * @param message StepExecutionStartingRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.StepExecutionStartingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StepExecutionStartingRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StepExecutionEndingRequest. */
        interface IStepExecutionEndingRequest {

            /** StepExecutionEndingRequest currentExecutionInfo */
            currentExecutionInfo?: (gauge.messages.IExecutionInfo|null);
        }

        /** Sent at end of Step Execution. Tells the runner to execute `after_step` hook. */
        class StepExecutionEndingRequest implements IStepExecutionEndingRequest {

            /**
             * Constructs a new StepExecutionEndingRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IStepExecutionEndingRequest);

            /** StepExecutionEndingRequest currentExecutionInfo. */
            public currentExecutionInfo?: (gauge.messages.IExecutionInfo|null);

            /**
             * Creates a new StepExecutionEndingRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StepExecutionEndingRequest instance
             */
            public static create(properties?: gauge.messages.IStepExecutionEndingRequest): gauge.messages.StepExecutionEndingRequest;

            /**
             * Encodes the specified StepExecutionEndingRequest message. Does not implicitly {@link gauge.messages.StepExecutionEndingRequest.verify|verify} messages.
             * @param message StepExecutionEndingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IStepExecutionEndingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StepExecutionEndingRequest message, length delimited. Does not implicitly {@link gauge.messages.StepExecutionEndingRequest.verify|verify} messages.
             * @param message StepExecutionEndingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IStepExecutionEndingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StepExecutionEndingRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StepExecutionEndingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.StepExecutionEndingRequest;

            /**
             * Decodes a StepExecutionEndingRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StepExecutionEndingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.StepExecutionEndingRequest;

            /**
             * Verifies a StepExecutionEndingRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StepExecutionEndingRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StepExecutionEndingRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.StepExecutionEndingRequest;

            /**
             * Creates a plain object from a StepExecutionEndingRequest message. Also converts values to other types if specified.
             * @param message StepExecutionEndingRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.StepExecutionEndingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StepExecutionEndingRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExecutionInfo. */
        interface IExecutionInfo {

            /** Holds the information of the current Spec. Valid in context of Spec execution. */
            currentSpec?: (gauge.messages.ISpecInfo|null);

            /** Holds the information of the current Scenario. Valid in context of Scenario execution. */
            currentScenario?: (gauge.messages.IScenarioInfo|null);

            /** Holds the information of the current Step. Valid in context of Step execution. */
            currentStep?: (gauge.messages.IStepInfo|null);

            /** Stacktrace of the execution. Valid only if there is an error in execution. */
            stacktrace?: (string|null);
        }

        /** Depending on the context (Step, Scenario, Spec or Suite), the respective fields are set. */
        class ExecutionInfo implements IExecutionInfo {

            /**
             * Constructs a new ExecutionInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IExecutionInfo);

            /** Holds the information of the current Spec. Valid in context of Spec execution. */
            public currentSpec?: (gauge.messages.ISpecInfo|null);

            /** Holds the information of the current Scenario. Valid in context of Scenario execution. */
            public currentScenario?: (gauge.messages.IScenarioInfo|null);

            /** Holds the information of the current Step. Valid in context of Step execution. */
            public currentStep?: (gauge.messages.IStepInfo|null);

            /** Stacktrace of the execution. Valid only if there is an error in execution. */
            public stacktrace: string;

            /**
             * Creates a new ExecutionInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionInfo instance
             */
            public static create(properties?: gauge.messages.IExecutionInfo): gauge.messages.ExecutionInfo;

            /**
             * Encodes the specified ExecutionInfo message. Does not implicitly {@link gauge.messages.ExecutionInfo.verify|verify} messages.
             * @param message ExecutionInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IExecutionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecutionInfo message, length delimited. Does not implicitly {@link gauge.messages.ExecutionInfo.verify|verify} messages.
             * @param message ExecutionInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IExecutionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ExecutionInfo;

            /**
             * Decodes an ExecutionInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecutionInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ExecutionInfo;

            /**
             * Verifies an ExecutionInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecutionInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecutionInfo
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ExecutionInfo;

            /**
             * Creates a plain object from an ExecutionInfo message. Also converts values to other types if specified.
             * @param message ExecutionInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ExecutionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecutionInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SpecInfo. */
        interface ISpecInfo {

            /** Name of the current Spec being executed. */
            name?: (string|null);

            /** Full File path containing the current Spec being executed. */
            fileName?: (string|null);

            /** Flag to indicate if the current Spec execution failed. */
            isFailed?: (boolean|null);

            /** Tags relevant to the current Spec execution. */
            tags?: (string[]|null);
        }

        /** Contains details of the Spec execution. */
        class SpecInfo implements ISpecInfo {

            /**
             * Constructs a new SpecInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.ISpecInfo);

            /** Name of the current Spec being executed. */
            public name: string;

            /** Full File path containing the current Spec being executed. */
            public fileName: string;

            /** Flag to indicate if the current Spec execution failed. */
            public isFailed: boolean;

            /** Tags relevant to the current Spec execution. */
            public tags: string[];

            /**
             * Creates a new SpecInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SpecInfo instance
             */
            public static create(properties?: gauge.messages.ISpecInfo): gauge.messages.SpecInfo;

            /**
             * Encodes the specified SpecInfo message. Does not implicitly {@link gauge.messages.SpecInfo.verify|verify} messages.
             * @param message SpecInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.ISpecInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SpecInfo message, length delimited. Does not implicitly {@link gauge.messages.SpecInfo.verify|verify} messages.
             * @param message SpecInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.ISpecInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SpecInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SpecInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.SpecInfo;

            /**
             * Decodes a SpecInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SpecInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.SpecInfo;

            /**
             * Verifies a SpecInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SpecInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SpecInfo
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.SpecInfo;

            /**
             * Creates a plain object from a SpecInfo message. Also converts values to other types if specified.
             * @param message SpecInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.SpecInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SpecInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ScenarioInfo. */
        interface IScenarioInfo {

            /** Name of the current Scenario being executed. */
            name?: (string|null);

            /** Flag to indicate if the current Scenario execution failed. */
            isFailed?: (boolean|null);

            /** Tags relevant to the current Scenario execution. */
            tags?: (string[]|null);
        }

        /** Contains details of the Scenario execution. */
        class ScenarioInfo implements IScenarioInfo {

            /**
             * Constructs a new ScenarioInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IScenarioInfo);

            /** Name of the current Scenario being executed. */
            public name: string;

            /** Flag to indicate if the current Scenario execution failed. */
            public isFailed: boolean;

            /** Tags relevant to the current Scenario execution. */
            public tags: string[];

            /**
             * Creates a new ScenarioInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ScenarioInfo instance
             */
            public static create(properties?: gauge.messages.IScenarioInfo): gauge.messages.ScenarioInfo;

            /**
             * Encodes the specified ScenarioInfo message. Does not implicitly {@link gauge.messages.ScenarioInfo.verify|verify} messages.
             * @param message ScenarioInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IScenarioInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ScenarioInfo message, length delimited. Does not implicitly {@link gauge.messages.ScenarioInfo.verify|verify} messages.
             * @param message ScenarioInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IScenarioInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ScenarioInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ScenarioInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ScenarioInfo;

            /**
             * Decodes a ScenarioInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ScenarioInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ScenarioInfo;

            /**
             * Verifies a ScenarioInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ScenarioInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ScenarioInfo
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ScenarioInfo;

            /**
             * Creates a plain object from a ScenarioInfo message. Also converts values to other types if specified.
             * @param message ScenarioInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ScenarioInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ScenarioInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StepInfo. */
        interface IStepInfo {

            /** The current request to execute Step */
            step?: (gauge.messages.IExecuteStepRequest|null);

            /** Flag to indicate if the current Step execution failed. */
            isFailed?: (boolean|null);

            /** The current stack trace in case of failure */
            stackTrace?: (string|null);

            /** The error message in case of failure */
            errorMessage?: (string|null);
        }

        /** Contains details of the Step execution. */
        class StepInfo implements IStepInfo {

            /**
             * Constructs a new StepInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IStepInfo);

            /** The current request to execute Step */
            public step?: (gauge.messages.IExecuteStepRequest|null);

            /** Flag to indicate if the current Step execution failed. */
            public isFailed: boolean;

            /** The current stack trace in case of failure */
            public stackTrace: string;

            /** The error message in case of failure */
            public errorMessage: string;

            /**
             * Creates a new StepInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StepInfo instance
             */
            public static create(properties?: gauge.messages.IStepInfo): gauge.messages.StepInfo;

            /**
             * Encodes the specified StepInfo message. Does not implicitly {@link gauge.messages.StepInfo.verify|verify} messages.
             * @param message StepInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IStepInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StepInfo message, length delimited. Does not implicitly {@link gauge.messages.StepInfo.verify|verify} messages.
             * @param message StepInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IStepInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StepInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StepInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.StepInfo;

            /**
             * Decodes a StepInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StepInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.StepInfo;

            /**
             * Verifies a StepInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StepInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StepInfo
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.StepInfo;

            /**
             * Creates a plain object from a StepInfo message. Also converts values to other types if specified.
             * @param message StepInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.StepInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StepInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExecuteStepRequest. */
        interface IExecuteStepRequest {

            /** This contains the parameters as defined in the Spec. */
            actualStepText?: (string|null);

            /** The paramters are replaced with placeholders. */
            parsedStepText?: (string|null);

            /** Flag to indicate if the execution of the Scenario, containing the current Step, failed. */
            scenarioFailing?: (boolean|null);

            /** Collection of parameters applicable to the current Step. */
            parameters?: (gauge.messages.IParameter[]|null);
        }

        /** Request sent ot the runner to Execute a Step */
        class ExecuteStepRequest implements IExecuteStepRequest {

            /**
             * Constructs a new ExecuteStepRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IExecuteStepRequest);

            /** This contains the parameters as defined in the Spec. */
            public actualStepText: string;

            /** The paramters are replaced with placeholders. */
            public parsedStepText: string;

            /** Flag to indicate if the execution of the Scenario, containing the current Step, failed. */
            public scenarioFailing: boolean;

            /** Collection of parameters applicable to the current Step. */
            public parameters: gauge.messages.IParameter[];

            /**
             * Creates a new ExecuteStepRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecuteStepRequest instance
             */
            public static create(properties?: gauge.messages.IExecuteStepRequest): gauge.messages.ExecuteStepRequest;

            /**
             * Encodes the specified ExecuteStepRequest message. Does not implicitly {@link gauge.messages.ExecuteStepRequest.verify|verify} messages.
             * @param message ExecuteStepRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IExecuteStepRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecuteStepRequest message, length delimited. Does not implicitly {@link gauge.messages.ExecuteStepRequest.verify|verify} messages.
             * @param message ExecuteStepRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IExecuteStepRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecuteStepRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecuteStepRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ExecuteStepRequest;

            /**
             * Decodes an ExecuteStepRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecuteStepRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ExecuteStepRequest;

            /**
             * Verifies an ExecuteStepRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecuteStepRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecuteStepRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ExecuteStepRequest;

            /**
             * Creates a plain object from an ExecuteStepRequest message. Also converts values to other types if specified.
             * @param message ExecuteStepRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ExecuteStepRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecuteStepRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StepValidateRequest. */
        interface IStepValidateRequest {

            /** The text is used to lookup Step implementation */
            stepText?: (string|null);

            /** The number of paramters in the Step */
            numberOfParameters?: (number|null);

            /** This is use to generate step implementation template */
            stepValue?: (gauge.messages.IProtoStepValue|null);
        }

        /** The runner should check if there is an implementation defined for the given Step Text. */
        class StepValidateRequest implements IStepValidateRequest {

            /**
             * Constructs a new StepValidateRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IStepValidateRequest);

            /** The text is used to lookup Step implementation */
            public stepText: string;

            /** The number of paramters in the Step */
            public numberOfParameters: number;

            /** This is use to generate step implementation template */
            public stepValue?: (gauge.messages.IProtoStepValue|null);

            /**
             * Creates a new StepValidateRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StepValidateRequest instance
             */
            public static create(properties?: gauge.messages.IStepValidateRequest): gauge.messages.StepValidateRequest;

            /**
             * Encodes the specified StepValidateRequest message. Does not implicitly {@link gauge.messages.StepValidateRequest.verify|verify} messages.
             * @param message StepValidateRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IStepValidateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StepValidateRequest message, length delimited. Does not implicitly {@link gauge.messages.StepValidateRequest.verify|verify} messages.
             * @param message StepValidateRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IStepValidateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StepValidateRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StepValidateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.StepValidateRequest;

            /**
             * Decodes a StepValidateRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StepValidateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.StepValidateRequest;

            /**
             * Verifies a StepValidateRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StepValidateRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StepValidateRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.StepValidateRequest;

            /**
             * Creates a plain object from a StepValidateRequest message. Also converts values to other types if specified.
             * @param message StepValidateRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.StepValidateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StepValidateRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StepValidateResponse. */
        interface IStepValidateResponse {

            /** StepValidateResponse isValid */
            isValid?: (boolean|null);

            /** StepValidateResponse errorMessage */
            errorMessage?: (string|null);

            /** StepValidateResponse errorType */
            errorType?: (gauge.messages.StepValidateResponse.ErrorType|null);

            /** StepValidateResponse suggestion */
            suggestion?: (string|null);
        }

        /** Returns an error message if it is an error response. */
        class StepValidateResponse implements IStepValidateResponse {

            /**
             * Constructs a new StepValidateResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IStepValidateResponse);

            /** StepValidateResponse isValid. */
            public isValid: boolean;

            /** StepValidateResponse errorMessage. */
            public errorMessage: string;

            /** StepValidateResponse errorType. */
            public errorType: gauge.messages.StepValidateResponse.ErrorType;

            /** StepValidateResponse suggestion. */
            public suggestion: string;

            /**
             * Creates a new StepValidateResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StepValidateResponse instance
             */
            public static create(properties?: gauge.messages.IStepValidateResponse): gauge.messages.StepValidateResponse;

            /**
             * Encodes the specified StepValidateResponse message. Does not implicitly {@link gauge.messages.StepValidateResponse.verify|verify} messages.
             * @param message StepValidateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IStepValidateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StepValidateResponse message, length delimited. Does not implicitly {@link gauge.messages.StepValidateResponse.verify|verify} messages.
             * @param message StepValidateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IStepValidateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StepValidateResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StepValidateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.StepValidateResponse;

            /**
             * Decodes a StepValidateResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StepValidateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.StepValidateResponse;

            /**
             * Verifies a StepValidateResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StepValidateResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StepValidateResponse
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.StepValidateResponse;

            /**
             * Creates a plain object from a StepValidateResponse message. Also converts values to other types if specified.
             * @param message StepValidateResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.StepValidateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StepValidateResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace StepValidateResponse {

            /** ErrorType enum. */
            enum ErrorType {
                STEP_IMPLEMENTATION_NOT_FOUND = 0,
                DUPLICATE_STEP_IMPLEMENTATION = 1
            }
        }

        /** Properties of a SuiteExecutionResult. */
        interface ISuiteExecutionResult {

            /** SuiteExecutionResult suiteResult */
            suiteResult?: (gauge.messages.IProtoSuiteResult|null);
        }

        /** Result of the Suite Execution. */
        class SuiteExecutionResult implements ISuiteExecutionResult {

            /**
             * Constructs a new SuiteExecutionResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.ISuiteExecutionResult);

            /** SuiteExecutionResult suiteResult. */
            public suiteResult?: (gauge.messages.IProtoSuiteResult|null);

            /**
             * Creates a new SuiteExecutionResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SuiteExecutionResult instance
             */
            public static create(properties?: gauge.messages.ISuiteExecutionResult): gauge.messages.SuiteExecutionResult;

            /**
             * Encodes the specified SuiteExecutionResult message. Does not implicitly {@link gauge.messages.SuiteExecutionResult.verify|verify} messages.
             * @param message SuiteExecutionResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.ISuiteExecutionResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SuiteExecutionResult message, length delimited. Does not implicitly {@link gauge.messages.SuiteExecutionResult.verify|verify} messages.
             * @param message SuiteExecutionResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.ISuiteExecutionResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SuiteExecutionResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SuiteExecutionResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.SuiteExecutionResult;

            /**
             * Decodes a SuiteExecutionResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SuiteExecutionResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.SuiteExecutionResult;

            /**
             * Verifies a SuiteExecutionResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SuiteExecutionResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SuiteExecutionResult
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.SuiteExecutionResult;

            /**
             * Creates a plain object from a SuiteExecutionResult message. Also converts values to other types if specified.
             * @param message SuiteExecutionResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.SuiteExecutionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SuiteExecutionResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SuiteExecutionResultItem. */
        interface ISuiteExecutionResultItem {

            /** SuiteExecutionResultItem resultItem */
            resultItem?: (gauge.messages.IProtoItem|null);
        }

        /** Represents a SuiteExecutionResultItem. */
        class SuiteExecutionResultItem implements ISuiteExecutionResultItem {

            /**
             * Constructs a new SuiteExecutionResultItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.ISuiteExecutionResultItem);

            /** SuiteExecutionResultItem resultItem. */
            public resultItem?: (gauge.messages.IProtoItem|null);

            /**
             * Creates a new SuiteExecutionResultItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SuiteExecutionResultItem instance
             */
            public static create(properties?: gauge.messages.ISuiteExecutionResultItem): gauge.messages.SuiteExecutionResultItem;

            /**
             * Encodes the specified SuiteExecutionResultItem message. Does not implicitly {@link gauge.messages.SuiteExecutionResultItem.verify|verify} messages.
             * @param message SuiteExecutionResultItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.ISuiteExecutionResultItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SuiteExecutionResultItem message, length delimited. Does not implicitly {@link gauge.messages.SuiteExecutionResultItem.verify|verify} messages.
             * @param message SuiteExecutionResultItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.ISuiteExecutionResultItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SuiteExecutionResultItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SuiteExecutionResultItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.SuiteExecutionResultItem;

            /**
             * Decodes a SuiteExecutionResultItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SuiteExecutionResultItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.SuiteExecutionResultItem;

            /**
             * Verifies a SuiteExecutionResultItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SuiteExecutionResultItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SuiteExecutionResultItem
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.SuiteExecutionResultItem;

            /**
             * Creates a plain object from a SuiteExecutionResultItem message. Also converts values to other types if specified.
             * @param message SuiteExecutionResultItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.SuiteExecutionResultItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SuiteExecutionResultItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StepNamesRequest. */
        interface IStepNamesRequest {
        }

        /** Requests Gauge to give all Step Names. */
        class StepNamesRequest implements IStepNamesRequest {

            /**
             * Constructs a new StepNamesRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IStepNamesRequest);

            /**
             * Creates a new StepNamesRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StepNamesRequest instance
             */
            public static create(properties?: gauge.messages.IStepNamesRequest): gauge.messages.StepNamesRequest;

            /**
             * Encodes the specified StepNamesRequest message. Does not implicitly {@link gauge.messages.StepNamesRequest.verify|verify} messages.
             * @param message StepNamesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IStepNamesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StepNamesRequest message, length delimited. Does not implicitly {@link gauge.messages.StepNamesRequest.verify|verify} messages.
             * @param message StepNamesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IStepNamesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StepNamesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StepNamesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.StepNamesRequest;

            /**
             * Decodes a StepNamesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StepNamesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.StepNamesRequest;

            /**
             * Verifies a StepNamesRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StepNamesRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StepNamesRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.StepNamesRequest;

            /**
             * Creates a plain object from a StepNamesRequest message. Also converts values to other types if specified.
             * @param message StepNamesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.StepNamesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StepNamesRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StepNamesResponse. */
        interface IStepNamesResponse {

            /** Collection of strings corresponding to Step texts. */
            steps?: (string[]|null);
        }

        /** Response to StepNamesRequest */
        class StepNamesResponse implements IStepNamesResponse {

            /**
             * Constructs a new StepNamesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IStepNamesResponse);

            /** Collection of strings corresponding to Step texts. */
            public steps: string[];

            /**
             * Creates a new StepNamesResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StepNamesResponse instance
             */
            public static create(properties?: gauge.messages.IStepNamesResponse): gauge.messages.StepNamesResponse;

            /**
             * Encodes the specified StepNamesResponse message. Does not implicitly {@link gauge.messages.StepNamesResponse.verify|verify} messages.
             * @param message StepNamesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IStepNamesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StepNamesResponse message, length delimited. Does not implicitly {@link gauge.messages.StepNamesResponse.verify|verify} messages.
             * @param message StepNamesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IStepNamesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StepNamesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StepNamesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.StepNamesResponse;

            /**
             * Decodes a StepNamesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StepNamesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.StepNamesResponse;

            /**
             * Verifies a StepNamesResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StepNamesResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StepNamesResponse
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.StepNamesResponse;

            /**
             * Creates a plain object from a StepNamesResponse message. Also converts values to other types if specified.
             * @param message StepNamesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.StepNamesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StepNamesResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ScenarioDataStoreInitRequest. */
        interface IScenarioDataStoreInitRequest {
        }

        /** Scenario Datastore is reset after every Scenario execution. */
        class ScenarioDataStoreInitRequest implements IScenarioDataStoreInitRequest {

            /**
             * Constructs a new ScenarioDataStoreInitRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IScenarioDataStoreInitRequest);

            /**
             * Creates a new ScenarioDataStoreInitRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ScenarioDataStoreInitRequest instance
             */
            public static create(properties?: gauge.messages.IScenarioDataStoreInitRequest): gauge.messages.ScenarioDataStoreInitRequest;

            /**
             * Encodes the specified ScenarioDataStoreInitRequest message. Does not implicitly {@link gauge.messages.ScenarioDataStoreInitRequest.verify|verify} messages.
             * @param message ScenarioDataStoreInitRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IScenarioDataStoreInitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ScenarioDataStoreInitRequest message, length delimited. Does not implicitly {@link gauge.messages.ScenarioDataStoreInitRequest.verify|verify} messages.
             * @param message ScenarioDataStoreInitRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IScenarioDataStoreInitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ScenarioDataStoreInitRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ScenarioDataStoreInitRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ScenarioDataStoreInitRequest;

            /**
             * Decodes a ScenarioDataStoreInitRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ScenarioDataStoreInitRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ScenarioDataStoreInitRequest;

            /**
             * Verifies a ScenarioDataStoreInitRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ScenarioDataStoreInitRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ScenarioDataStoreInitRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ScenarioDataStoreInitRequest;

            /**
             * Creates a plain object from a ScenarioDataStoreInitRequest message. Also converts values to other types if specified.
             * @param message ScenarioDataStoreInitRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ScenarioDataStoreInitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ScenarioDataStoreInitRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SpecDataStoreInitRequest. */
        interface ISpecDataStoreInitRequest {
        }

        /** Spec Datastore is reset after every Spec execution. */
        class SpecDataStoreInitRequest implements ISpecDataStoreInitRequest {

            /**
             * Constructs a new SpecDataStoreInitRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.ISpecDataStoreInitRequest);

            /**
             * Creates a new SpecDataStoreInitRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SpecDataStoreInitRequest instance
             */
            public static create(properties?: gauge.messages.ISpecDataStoreInitRequest): gauge.messages.SpecDataStoreInitRequest;

            /**
             * Encodes the specified SpecDataStoreInitRequest message. Does not implicitly {@link gauge.messages.SpecDataStoreInitRequest.verify|verify} messages.
             * @param message SpecDataStoreInitRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.ISpecDataStoreInitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SpecDataStoreInitRequest message, length delimited. Does not implicitly {@link gauge.messages.SpecDataStoreInitRequest.verify|verify} messages.
             * @param message SpecDataStoreInitRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.ISpecDataStoreInitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SpecDataStoreInitRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SpecDataStoreInitRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.SpecDataStoreInitRequest;

            /**
             * Decodes a SpecDataStoreInitRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SpecDataStoreInitRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.SpecDataStoreInitRequest;

            /**
             * Verifies a SpecDataStoreInitRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SpecDataStoreInitRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SpecDataStoreInitRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.SpecDataStoreInitRequest;

            /**
             * Creates a plain object from a SpecDataStoreInitRequest message. Also converts values to other types if specified.
             * @param message SpecDataStoreInitRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.SpecDataStoreInitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SpecDataStoreInitRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SuiteDataStoreInitRequest. */
        interface ISuiteDataStoreInitRequest {
        }

        /** Suite Datastore is reset after every Suite execution. */
        class SuiteDataStoreInitRequest implements ISuiteDataStoreInitRequest {

            /**
             * Constructs a new SuiteDataStoreInitRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.ISuiteDataStoreInitRequest);

            /**
             * Creates a new SuiteDataStoreInitRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SuiteDataStoreInitRequest instance
             */
            public static create(properties?: gauge.messages.ISuiteDataStoreInitRequest): gauge.messages.SuiteDataStoreInitRequest;

            /**
             * Encodes the specified SuiteDataStoreInitRequest message. Does not implicitly {@link gauge.messages.SuiteDataStoreInitRequest.verify|verify} messages.
             * @param message SuiteDataStoreInitRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.ISuiteDataStoreInitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SuiteDataStoreInitRequest message, length delimited. Does not implicitly {@link gauge.messages.SuiteDataStoreInitRequest.verify|verify} messages.
             * @param message SuiteDataStoreInitRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.ISuiteDataStoreInitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SuiteDataStoreInitRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SuiteDataStoreInitRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.SuiteDataStoreInitRequest;

            /**
             * Decodes a SuiteDataStoreInitRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SuiteDataStoreInitRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.SuiteDataStoreInitRequest;

            /**
             * Verifies a SuiteDataStoreInitRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SuiteDataStoreInitRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SuiteDataStoreInitRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.SuiteDataStoreInitRequest;

            /**
             * Creates a plain object from a SuiteDataStoreInitRequest message. Also converts values to other types if specified.
             * @param message SuiteDataStoreInitRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.SuiteDataStoreInitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SuiteDataStoreInitRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ParameterPosition. */
        interface IParameterPosition {

            /** ParameterPosition oldPosition */
            oldPosition?: (number|null);

            /** ParameterPosition newPosition */
            newPosition?: (number|null);
        }

        /** Used when refactoring a Step. */
        class ParameterPosition implements IParameterPosition {

            /**
             * Constructs a new ParameterPosition.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IParameterPosition);

            /** ParameterPosition oldPosition. */
            public oldPosition: number;

            /** ParameterPosition newPosition. */
            public newPosition: number;

            /**
             * Creates a new ParameterPosition instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ParameterPosition instance
             */
            public static create(properties?: gauge.messages.IParameterPosition): gauge.messages.ParameterPosition;

            /**
             * Encodes the specified ParameterPosition message. Does not implicitly {@link gauge.messages.ParameterPosition.verify|verify} messages.
             * @param message ParameterPosition message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IParameterPosition, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ParameterPosition message, length delimited. Does not implicitly {@link gauge.messages.ParameterPosition.verify|verify} messages.
             * @param message ParameterPosition message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IParameterPosition, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ParameterPosition message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ParameterPosition
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ParameterPosition;

            /**
             * Decodes a ParameterPosition message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ParameterPosition
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ParameterPosition;

            /**
             * Verifies a ParameterPosition message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ParameterPosition message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ParameterPosition
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ParameterPosition;

            /**
             * Creates a plain object from a ParameterPosition message. Also converts values to other types if specified.
             * @param message ParameterPosition
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ParameterPosition, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ParameterPosition to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RefactorRequest. */
        interface IRefactorRequest {

            /** Old value, used to lookup Step to refactor */
            oldStepValue?: (gauge.messages.IProtoStepValue|null);

            /** New value, the to-be value of Step being refactored. */
            newStepValue?: (gauge.messages.IProtoStepValue|null);

            /** Holds parameter positions of all parameters. Contains old and new parameter positions. */
            paramPositions?: (gauge.messages.IParameterPosition[]|null);

            /** If set to true, the refactored files should be saved to the file system before returning the response. */
            saveChanges?: (boolean|null);
        }

        /** Tells the runner to refactor the specified Step. */
        class RefactorRequest implements IRefactorRequest {

            /**
             * Constructs a new RefactorRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IRefactorRequest);

            /** Old value, used to lookup Step to refactor */
            public oldStepValue?: (gauge.messages.IProtoStepValue|null);

            /** New value, the to-be value of Step being refactored. */
            public newStepValue?: (gauge.messages.IProtoStepValue|null);

            /** Holds parameter positions of all parameters. Contains old and new parameter positions. */
            public paramPositions: gauge.messages.IParameterPosition[];

            /** If set to true, the refactored files should be saved to the file system before returning the response. */
            public saveChanges: boolean;

            /**
             * Creates a new RefactorRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RefactorRequest instance
             */
            public static create(properties?: gauge.messages.IRefactorRequest): gauge.messages.RefactorRequest;

            /**
             * Encodes the specified RefactorRequest message. Does not implicitly {@link gauge.messages.RefactorRequest.verify|verify} messages.
             * @param message RefactorRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IRefactorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RefactorRequest message, length delimited. Does not implicitly {@link gauge.messages.RefactorRequest.verify|verify} messages.
             * @param message RefactorRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IRefactorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RefactorRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RefactorRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.RefactorRequest;

            /**
             * Decodes a RefactorRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RefactorRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.RefactorRequest;

            /**
             * Verifies a RefactorRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RefactorRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RefactorRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.RefactorRequest;

            /**
             * Creates a plain object from a RefactorRequest message. Also converts values to other types if specified.
             * @param message RefactorRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.RefactorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RefactorRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileChanges. */
        interface IFileChanges {

            /** FileChanges fileName */
            fileName?: (string|null);

            /** FileChanges fileContent */
            fileContent?: (string|null);

            /** FileChanges diffs */
            diffs?: (gauge.messages.ITextDiff[]|null);
        }

        /** Give all file changes to be made to file system */
        class FileChanges implements IFileChanges {

            /**
             * Constructs a new FileChanges.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IFileChanges);

            /** FileChanges fileName. */
            public fileName: string;

            /** FileChanges fileContent. */
            public fileContent: string;

            /** FileChanges diffs. */
            public diffs: gauge.messages.ITextDiff[];

            /**
             * Creates a new FileChanges instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileChanges instance
             */
            public static create(properties?: gauge.messages.IFileChanges): gauge.messages.FileChanges;

            /**
             * Encodes the specified FileChanges message. Does not implicitly {@link gauge.messages.FileChanges.verify|verify} messages.
             * @param message FileChanges message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IFileChanges, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileChanges message, length delimited. Does not implicitly {@link gauge.messages.FileChanges.verify|verify} messages.
             * @param message FileChanges message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IFileChanges, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileChanges message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileChanges
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.FileChanges;

            /**
             * Decodes a FileChanges message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileChanges
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.FileChanges;

            /**
             * Verifies a FileChanges message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileChanges message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileChanges
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.FileChanges;

            /**
             * Creates a plain object from a FileChanges message. Also converts values to other types if specified.
             * @param message FileChanges
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.FileChanges, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileChanges to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RefactorResponse. */
        interface IRefactorResponse {

            /** Flag indicating the success of Refactor operation. */
            success?: (boolean|null);

            /** Error message, valid only if Refactor wasn't successful */
            error?: (string|null);

            /** List of files that were affected because of the refactoring. */
            filesChanged?: (string[]|null);

            /** List of file changes to be made to successfully achieve refactoring. */
            fileChanges?: (gauge.messages.IFileChanges[]|null);
        }

        /** Response of a RefactorRequest */
        class RefactorResponse implements IRefactorResponse {

            /**
             * Constructs a new RefactorResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IRefactorResponse);

            /** Flag indicating the success of Refactor operation. */
            public success: boolean;

            /** Error message, valid only if Refactor wasn't successful */
            public error: string;

            /** List of files that were affected because of the refactoring. */
            public filesChanged: string[];

            /** List of file changes to be made to successfully achieve refactoring. */
            public fileChanges: gauge.messages.IFileChanges[];

            /**
             * Creates a new RefactorResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RefactorResponse instance
             */
            public static create(properties?: gauge.messages.IRefactorResponse): gauge.messages.RefactorResponse;

            /**
             * Encodes the specified RefactorResponse message. Does not implicitly {@link gauge.messages.RefactorResponse.verify|verify} messages.
             * @param message RefactorResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IRefactorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RefactorResponse message, length delimited. Does not implicitly {@link gauge.messages.RefactorResponse.verify|verify} messages.
             * @param message RefactorResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IRefactorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RefactorResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RefactorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.RefactorResponse;

            /**
             * Decodes a RefactorResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RefactorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.RefactorResponse;

            /**
             * Verifies a RefactorResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RefactorResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RefactorResponse
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.RefactorResponse;

            /**
             * Creates a plain object from a RefactorResponse message. Also converts values to other types if specified.
             * @param message RefactorResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.RefactorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RefactorResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StepNameRequest. */
        interface IStepNameRequest {

            /** This is the parsed step value, i.e. with placeholders for parameters. */
            stepValue?: (string|null);
        }

        /** Request for details on a Single Step. */
        class StepNameRequest implements IStepNameRequest {

            /**
             * Constructs a new StepNameRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IStepNameRequest);

            /** This is the parsed step value, i.e. with placeholders for parameters. */
            public stepValue: string;

            /**
             * Creates a new StepNameRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StepNameRequest instance
             */
            public static create(properties?: gauge.messages.IStepNameRequest): gauge.messages.StepNameRequest;

            /**
             * Encodes the specified StepNameRequest message. Does not implicitly {@link gauge.messages.StepNameRequest.verify|verify} messages.
             * @param message StepNameRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IStepNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StepNameRequest message, length delimited. Does not implicitly {@link gauge.messages.StepNameRequest.verify|verify} messages.
             * @param message StepNameRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IStepNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StepNameRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StepNameRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.StepNameRequest;

            /**
             * Decodes a StepNameRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StepNameRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.StepNameRequest;

            /**
             * Verifies a StepNameRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StepNameRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StepNameRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.StepNameRequest;

            /**
             * Creates a plain object from a StepNameRequest message. Also converts values to other types if specified.
             * @param message StepNameRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.StepNameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StepNameRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StepNameResponse. */
        interface IStepNameResponse {

            /** Flag indicating if there is a match for the given Step Text. */
            isStepPresent?: (boolean|null);

            /** The Step name of the given step. */
            stepName?: (string[]|null);

            /** Flag indicating if the given Step is an alias. */
            hasAlias?: (boolean|null);

            /** File name in which the step implementation exists */
            fileName?: (string|null);

            /** Range of step */
            span?: (gauge.messages.ISpan|null);
        }

        /** Response to StepNameRequest. */
        class StepNameResponse implements IStepNameResponse {

            /**
             * Constructs a new StepNameResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IStepNameResponse);

            /** Flag indicating if there is a match for the given Step Text. */
            public isStepPresent: boolean;

            /** The Step name of the given step. */
            public stepName: string[];

            /** Flag indicating if the given Step is an alias. */
            public hasAlias: boolean;

            /** File name in which the step implementation exists */
            public fileName: string;

            /** Range of step */
            public span?: (gauge.messages.ISpan|null);

            /**
             * Creates a new StepNameResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StepNameResponse instance
             */
            public static create(properties?: gauge.messages.IStepNameResponse): gauge.messages.StepNameResponse;

            /**
             * Encodes the specified StepNameResponse message. Does not implicitly {@link gauge.messages.StepNameResponse.verify|verify} messages.
             * @param message StepNameResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IStepNameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StepNameResponse message, length delimited. Does not implicitly {@link gauge.messages.StepNameResponse.verify|verify} messages.
             * @param message StepNameResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IStepNameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StepNameResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StepNameResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.StepNameResponse;

            /**
             * Decodes a StepNameResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StepNameResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.StepNameResponse;

            /**
             * Verifies a StepNameResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StepNameResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StepNameResponse
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.StepNameResponse;

            /**
             * Creates a plain object from a StepNameResponse message. Also converts values to other types if specified.
             * @param message StepNameResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.StepNameResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StepNameResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UnsupportedMessageResponse. */
        interface IUnsupportedMessageResponse {

            /** UnsupportedMessageResponse message */
            message?: (string|null);
        }

        /** Response when a unsupported message request is sent. */
        class UnsupportedMessageResponse implements IUnsupportedMessageResponse {

            /**
             * Constructs a new UnsupportedMessageResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IUnsupportedMessageResponse);

            /** UnsupportedMessageResponse message. */
            public message: string;

            /**
             * Creates a new UnsupportedMessageResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UnsupportedMessageResponse instance
             */
            public static create(properties?: gauge.messages.IUnsupportedMessageResponse): gauge.messages.UnsupportedMessageResponse;

            /**
             * Encodes the specified UnsupportedMessageResponse message. Does not implicitly {@link gauge.messages.UnsupportedMessageResponse.verify|verify} messages.
             * @param message UnsupportedMessageResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IUnsupportedMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UnsupportedMessageResponse message, length delimited. Does not implicitly {@link gauge.messages.UnsupportedMessageResponse.verify|verify} messages.
             * @param message UnsupportedMessageResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IUnsupportedMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UnsupportedMessageResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UnsupportedMessageResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.UnsupportedMessageResponse;

            /**
             * Decodes an UnsupportedMessageResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UnsupportedMessageResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.UnsupportedMessageResponse;

            /**
             * Verifies an UnsupportedMessageResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UnsupportedMessageResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UnsupportedMessageResponse
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.UnsupportedMessageResponse;

            /**
             * Creates a plain object from an UnsupportedMessageResponse message. Also converts values to other types if specified.
             * @param message UnsupportedMessageResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.UnsupportedMessageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UnsupportedMessageResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CacheFileRequest. */
        interface ICacheFileRequest {

            /** File content of the file to be cached */
            content?: (string|null);

            /** File path of the file to be cached */
            filePath?: (string|null);

            /** Specifies if the file is closed */
            isClosed?: (boolean|null);

            /** Specifies the status of the file */
            status?: (gauge.messages.CacheFileRequest.FileStatus|null);
        }

        /** so runner can cache file contents present on the client(an editor). */
        class CacheFileRequest implements ICacheFileRequest {

            /**
             * Constructs a new CacheFileRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.ICacheFileRequest);

            /** File content of the file to be cached */
            public content: string;

            /** File path of the file to be cached */
            public filePath: string;

            /** Specifies if the file is closed */
            public isClosed: boolean;

            /** Specifies the status of the file */
            public status: gauge.messages.CacheFileRequest.FileStatus;

            /**
             * Creates a new CacheFileRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CacheFileRequest instance
             */
            public static create(properties?: gauge.messages.ICacheFileRequest): gauge.messages.CacheFileRequest;

            /**
             * Encodes the specified CacheFileRequest message. Does not implicitly {@link gauge.messages.CacheFileRequest.verify|verify} messages.
             * @param message CacheFileRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.ICacheFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CacheFileRequest message, length delimited. Does not implicitly {@link gauge.messages.CacheFileRequest.verify|verify} messages.
             * @param message CacheFileRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.ICacheFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CacheFileRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CacheFileRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.CacheFileRequest;

            /**
             * Decodes a CacheFileRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CacheFileRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.CacheFileRequest;

            /**
             * Verifies a CacheFileRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CacheFileRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CacheFileRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.CacheFileRequest;

            /**
             * Creates a plain object from a CacheFileRequest message. Also converts values to other types if specified.
             * @param message CacheFileRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.CacheFileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CacheFileRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace CacheFileRequest {

            /** FileStatus enum. */
            enum FileStatus {
                CHANGED = 0,
                CLOSED = 1,
                CREATED = 2,
                DELETED = 3,
                OPENED = 4
            }
        }

        /** Properties of a StepPositionsRequest. */
        interface IStepPositionsRequest {

            /** Get step positions for file path */
            filePath?: (string|null);
        }

        /** Request for find step positions */
        class StepPositionsRequest implements IStepPositionsRequest {

            /**
             * Constructs a new StepPositionsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IStepPositionsRequest);

            /** Get step positions for file path */
            public filePath: string;

            /**
             * Creates a new StepPositionsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StepPositionsRequest instance
             */
            public static create(properties?: gauge.messages.IStepPositionsRequest): gauge.messages.StepPositionsRequest;

            /**
             * Encodes the specified StepPositionsRequest message. Does not implicitly {@link gauge.messages.StepPositionsRequest.verify|verify} messages.
             * @param message StepPositionsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IStepPositionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StepPositionsRequest message, length delimited. Does not implicitly {@link gauge.messages.StepPositionsRequest.verify|verify} messages.
             * @param message StepPositionsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IStepPositionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StepPositionsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StepPositionsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.StepPositionsRequest;

            /**
             * Decodes a StepPositionsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StepPositionsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.StepPositionsRequest;

            /**
             * Verifies a StepPositionsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StepPositionsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StepPositionsRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.StepPositionsRequest;

            /**
             * Creates a plain object from a StepPositionsRequest message. Also converts values to other types if specified.
             * @param message StepPositionsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.StepPositionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StepPositionsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StepPositionsResponse. */
        interface IStepPositionsResponse {

            /** Step Position */
            stepPositions?: (gauge.messages.StepPositionsResponse.IStepPosition[]|null);

            /** Error message */
            error?: (string|null);
        }

        /** Response for find step positions */
        class StepPositionsResponse implements IStepPositionsResponse {

            /**
             * Constructs a new StepPositionsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IStepPositionsResponse);

            /** Step Position */
            public stepPositions: gauge.messages.StepPositionsResponse.IStepPosition[];

            /** Error message */
            public error: string;

            /**
             * Creates a new StepPositionsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StepPositionsResponse instance
             */
            public static create(properties?: gauge.messages.IStepPositionsResponse): gauge.messages.StepPositionsResponse;

            /**
             * Encodes the specified StepPositionsResponse message. Does not implicitly {@link gauge.messages.StepPositionsResponse.verify|verify} messages.
             * @param message StepPositionsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IStepPositionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StepPositionsResponse message, length delimited. Does not implicitly {@link gauge.messages.StepPositionsResponse.verify|verify} messages.
             * @param message StepPositionsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IStepPositionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StepPositionsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StepPositionsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.StepPositionsResponse;

            /**
             * Decodes a StepPositionsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StepPositionsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.StepPositionsResponse;

            /**
             * Verifies a StepPositionsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StepPositionsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StepPositionsResponse
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.StepPositionsResponse;

            /**
             * Creates a plain object from a StepPositionsResponse message. Also converts values to other types if specified.
             * @param message StepPositionsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.StepPositionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StepPositionsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace StepPositionsResponse {

            /** Properties of a StepPosition. */
            interface IStepPosition {

                /** Step Value */
                stepValue?: (string|null);

                /** Range of step */
                span?: (gauge.messages.ISpan|null);
            }

            /** Step position for each step implementation */
            class StepPosition implements IStepPosition {

                /**
                 * Constructs a new StepPosition.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: gauge.messages.StepPositionsResponse.IStepPosition);

                /** Step Value */
                public stepValue: string;

                /** Range of step */
                public span?: (gauge.messages.ISpan|null);

                /**
                 * Creates a new StepPosition instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StepPosition instance
                 */
                public static create(properties?: gauge.messages.StepPositionsResponse.IStepPosition): gauge.messages.StepPositionsResponse.StepPosition;

                /**
                 * Encodes the specified StepPosition message. Does not implicitly {@link gauge.messages.StepPositionsResponse.StepPosition.verify|verify} messages.
                 * @param message StepPosition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: gauge.messages.StepPositionsResponse.IStepPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StepPosition message, length delimited. Does not implicitly {@link gauge.messages.StepPositionsResponse.StepPosition.verify|verify} messages.
                 * @param message StepPosition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: gauge.messages.StepPositionsResponse.IStepPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StepPosition message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StepPosition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.StepPositionsResponse.StepPosition;

                /**
                 * Decodes a StepPosition message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StepPosition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.StepPositionsResponse.StepPosition;

                /**
                 * Verifies a StepPosition message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StepPosition message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StepPosition
                 */
                public static fromObject(object: { [k: string]: any }): gauge.messages.StepPositionsResponse.StepPosition;

                /**
                 * Creates a plain object from a StepPosition message. Also converts values to other types if specified.
                 * @param message StepPosition
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: gauge.messages.StepPositionsResponse.StepPosition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StepPosition to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ImplementationFileGlobPatternRequest. */
        interface IImplementationFileGlobPatternRequest {
        }

        /** Request for getting Implementation file glob pattern */
        class ImplementationFileGlobPatternRequest implements IImplementationFileGlobPatternRequest {

            /**
             * Constructs a new ImplementationFileGlobPatternRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IImplementationFileGlobPatternRequest);

            /**
             * Creates a new ImplementationFileGlobPatternRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ImplementationFileGlobPatternRequest instance
             */
            public static create(properties?: gauge.messages.IImplementationFileGlobPatternRequest): gauge.messages.ImplementationFileGlobPatternRequest;

            /**
             * Encodes the specified ImplementationFileGlobPatternRequest message. Does not implicitly {@link gauge.messages.ImplementationFileGlobPatternRequest.verify|verify} messages.
             * @param message ImplementationFileGlobPatternRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IImplementationFileGlobPatternRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ImplementationFileGlobPatternRequest message, length delimited. Does not implicitly {@link gauge.messages.ImplementationFileGlobPatternRequest.verify|verify} messages.
             * @param message ImplementationFileGlobPatternRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IImplementationFileGlobPatternRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ImplementationFileGlobPatternRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ImplementationFileGlobPatternRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ImplementationFileGlobPatternRequest;

            /**
             * Decodes an ImplementationFileGlobPatternRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ImplementationFileGlobPatternRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ImplementationFileGlobPatternRequest;

            /**
             * Verifies an ImplementationFileGlobPatternRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ImplementationFileGlobPatternRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ImplementationFileGlobPatternRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ImplementationFileGlobPatternRequest;

            /**
             * Creates a plain object from an ImplementationFileGlobPatternRequest message. Also converts values to other types if specified.
             * @param message ImplementationFileGlobPatternRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ImplementationFileGlobPatternRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ImplementationFileGlobPatternRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ImplementationFileGlobPatternResponse. */
        interface IImplementationFileGlobPatternResponse {

            /** List of implementation file glob patterns */
            globPatterns?: (string[]|null);
        }

        /** Response for getting Implementation file glob pattern */
        class ImplementationFileGlobPatternResponse implements IImplementationFileGlobPatternResponse {

            /**
             * Constructs a new ImplementationFileGlobPatternResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IImplementationFileGlobPatternResponse);

            /** List of implementation file glob patterns */
            public globPatterns: string[];

            /**
             * Creates a new ImplementationFileGlobPatternResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ImplementationFileGlobPatternResponse instance
             */
            public static create(properties?: gauge.messages.IImplementationFileGlobPatternResponse): gauge.messages.ImplementationFileGlobPatternResponse;

            /**
             * Encodes the specified ImplementationFileGlobPatternResponse message. Does not implicitly {@link gauge.messages.ImplementationFileGlobPatternResponse.verify|verify} messages.
             * @param message ImplementationFileGlobPatternResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IImplementationFileGlobPatternResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ImplementationFileGlobPatternResponse message, length delimited. Does not implicitly {@link gauge.messages.ImplementationFileGlobPatternResponse.verify|verify} messages.
             * @param message ImplementationFileGlobPatternResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IImplementationFileGlobPatternResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ImplementationFileGlobPatternResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ImplementationFileGlobPatternResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ImplementationFileGlobPatternResponse;

            /**
             * Decodes an ImplementationFileGlobPatternResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ImplementationFileGlobPatternResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ImplementationFileGlobPatternResponse;

            /**
             * Verifies an ImplementationFileGlobPatternResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ImplementationFileGlobPatternResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ImplementationFileGlobPatternResponse
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ImplementationFileGlobPatternResponse;

            /**
             * Creates a plain object from an ImplementationFileGlobPatternResponse message. Also converts values to other types if specified.
             * @param message ImplementationFileGlobPatternResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ImplementationFileGlobPatternResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ImplementationFileGlobPatternResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ImplementationFileListRequest. */
        interface IImplementationFileListRequest {
        }

        /** Request for getting Implementation file list */
        class ImplementationFileListRequest implements IImplementationFileListRequest {

            /**
             * Constructs a new ImplementationFileListRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IImplementationFileListRequest);

            /**
             * Creates a new ImplementationFileListRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ImplementationFileListRequest instance
             */
            public static create(properties?: gauge.messages.IImplementationFileListRequest): gauge.messages.ImplementationFileListRequest;

            /**
             * Encodes the specified ImplementationFileListRequest message. Does not implicitly {@link gauge.messages.ImplementationFileListRequest.verify|verify} messages.
             * @param message ImplementationFileListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IImplementationFileListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ImplementationFileListRequest message, length delimited. Does not implicitly {@link gauge.messages.ImplementationFileListRequest.verify|verify} messages.
             * @param message ImplementationFileListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IImplementationFileListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ImplementationFileListRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ImplementationFileListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ImplementationFileListRequest;

            /**
             * Decodes an ImplementationFileListRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ImplementationFileListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ImplementationFileListRequest;

            /**
             * Verifies an ImplementationFileListRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ImplementationFileListRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ImplementationFileListRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ImplementationFileListRequest;

            /**
             * Creates a plain object from an ImplementationFileListRequest message. Also converts values to other types if specified.
             * @param message ImplementationFileListRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ImplementationFileListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ImplementationFileListRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ImplementationFileListResponse. */
        interface IImplementationFileListResponse {

            /** List of implementation files */
            implementationFilePaths?: (string[]|null);
        }

        /** Response for getting Implementation file list */
        class ImplementationFileListResponse implements IImplementationFileListResponse {

            /**
             * Constructs a new ImplementationFileListResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IImplementationFileListResponse);

            /** List of implementation files */
            public implementationFilePaths: string[];

            /**
             * Creates a new ImplementationFileListResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ImplementationFileListResponse instance
             */
            public static create(properties?: gauge.messages.IImplementationFileListResponse): gauge.messages.ImplementationFileListResponse;

            /**
             * Encodes the specified ImplementationFileListResponse message. Does not implicitly {@link gauge.messages.ImplementationFileListResponse.verify|verify} messages.
             * @param message ImplementationFileListResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IImplementationFileListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ImplementationFileListResponse message, length delimited. Does not implicitly {@link gauge.messages.ImplementationFileListResponse.verify|verify} messages.
             * @param message ImplementationFileListResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IImplementationFileListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ImplementationFileListResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ImplementationFileListResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.ImplementationFileListResponse;

            /**
             * Decodes an ImplementationFileListResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ImplementationFileListResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.ImplementationFileListResponse;

            /**
             * Verifies an ImplementationFileListResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ImplementationFileListResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ImplementationFileListResponse
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.ImplementationFileListResponse;

            /**
             * Creates a plain object from an ImplementationFileListResponse message. Also converts values to other types if specified.
             * @param message ImplementationFileListResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.ImplementationFileListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ImplementationFileListResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StubImplementationCodeRequest. */
        interface IStubImplementationCodeRequest {

            /** Path of the file where the new stub implementation will be added */
            implementationFilePath?: (string|null);

            /** List of implementation codes to be appended to implementation file. */
            codes?: (string[]|null);
        }

        /** Request for injecting code snippet into implementation file */
        class StubImplementationCodeRequest implements IStubImplementationCodeRequest {

            /**
             * Constructs a new StubImplementationCodeRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IStubImplementationCodeRequest);

            /** Path of the file where the new stub implementation will be added */
            public implementationFilePath: string;

            /** List of implementation codes to be appended to implementation file. */
            public codes: string[];

            /**
             * Creates a new StubImplementationCodeRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StubImplementationCodeRequest instance
             */
            public static create(properties?: gauge.messages.IStubImplementationCodeRequest): gauge.messages.StubImplementationCodeRequest;

            /**
             * Encodes the specified StubImplementationCodeRequest message. Does not implicitly {@link gauge.messages.StubImplementationCodeRequest.verify|verify} messages.
             * @param message StubImplementationCodeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IStubImplementationCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StubImplementationCodeRequest message, length delimited. Does not implicitly {@link gauge.messages.StubImplementationCodeRequest.verify|verify} messages.
             * @param message StubImplementationCodeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IStubImplementationCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StubImplementationCodeRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StubImplementationCodeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.StubImplementationCodeRequest;

            /**
             * Decodes a StubImplementationCodeRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StubImplementationCodeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.StubImplementationCodeRequest;

            /**
             * Verifies a StubImplementationCodeRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StubImplementationCodeRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StubImplementationCodeRequest
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.StubImplementationCodeRequest;

            /**
             * Creates a plain object from a StubImplementationCodeRequest message. Also converts values to other types if specified.
             * @param message StubImplementationCodeRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.StubImplementationCodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StubImplementationCodeRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TextDiff. */
        interface ITextDiff {

            /** Range of file to be replaced */
            span?: (gauge.messages.ISpan|null);

            /** New content to replace the content in the span */
            content?: (string|null);
        }

        /** A Single Replace Diff Element to be applied */
        class TextDiff implements ITextDiff {

            /**
             * Constructs a new TextDiff.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.ITextDiff);

            /** Range of file to be replaced */
            public span?: (gauge.messages.ISpan|null);

            /** New content to replace the content in the span */
            public content: string;

            /**
             * Creates a new TextDiff instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TextDiff instance
             */
            public static create(properties?: gauge.messages.ITextDiff): gauge.messages.TextDiff;

            /**
             * Encodes the specified TextDiff message. Does not implicitly {@link gauge.messages.TextDiff.verify|verify} messages.
             * @param message TextDiff message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.ITextDiff, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TextDiff message, length delimited. Does not implicitly {@link gauge.messages.TextDiff.verify|verify} messages.
             * @param message TextDiff message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.ITextDiff, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TextDiff message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TextDiff
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.TextDiff;

            /**
             * Decodes a TextDiff message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TextDiff
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.TextDiff;

            /**
             * Verifies a TextDiff message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TextDiff message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TextDiff
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.TextDiff;

            /**
             * Creates a plain object from a TextDiff message. Also converts values to other types if specified.
             * @param message TextDiff
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.TextDiff, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TextDiff to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDiff. */
        interface IFileDiff {

            /** File Path where the new content needs to be put in */
            filePath?: (string|null);

            /** The diffs which need to be applied to this file */
            textDiffs?: (gauge.messages.ITextDiff[]|null);
        }

        /** Diffs to be applied to a file */
        class FileDiff implements IFileDiff {

            /**
             * Constructs a new FileDiff.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IFileDiff);

            /** File Path where the new content needs to be put in */
            public filePath: string;

            /** The diffs which need to be applied to this file */
            public textDiffs: gauge.messages.ITextDiff[];

            /**
             * Creates a new FileDiff instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDiff instance
             */
            public static create(properties?: gauge.messages.IFileDiff): gauge.messages.FileDiff;

            /**
             * Encodes the specified FileDiff message. Does not implicitly {@link gauge.messages.FileDiff.verify|verify} messages.
             * @param message FileDiff message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IFileDiff, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDiff message, length delimited. Does not implicitly {@link gauge.messages.FileDiff.verify|verify} messages.
             * @param message FileDiff message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IFileDiff, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDiff message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDiff
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.FileDiff;

            /**
             * Decodes a FileDiff message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDiff
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.FileDiff;

            /**
             * Verifies a FileDiff message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDiff message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDiff
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.FileDiff;

            /**
             * Creates a plain object from a FileDiff message. Also converts values to other types if specified.
             * @param message FileDiff
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.FileDiff, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDiff to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a KeepAlive. */
        interface IKeepAlive {

            /** ID of the plugin initiating this request */
            pluginId?: (string|null);
        }

        /** Tell gauge to reset the kill timer, thus extending the life */
        class KeepAlive implements IKeepAlive {

            /**
             * Constructs a new KeepAlive.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IKeepAlive);

            /** ID of the plugin initiating this request */
            public pluginId: string;

            /**
             * Creates a new KeepAlive instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KeepAlive instance
             */
            public static create(properties?: gauge.messages.IKeepAlive): gauge.messages.KeepAlive;

            /**
             * Encodes the specified KeepAlive message. Does not implicitly {@link gauge.messages.KeepAlive.verify|verify} messages.
             * @param message KeepAlive message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IKeepAlive, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KeepAlive message, length delimited. Does not implicitly {@link gauge.messages.KeepAlive.verify|verify} messages.
             * @param message KeepAlive message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IKeepAlive, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KeepAlive message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KeepAlive
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.KeepAlive;

            /**
             * Decodes a KeepAlive message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KeepAlive
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.KeepAlive;

            /**
             * Verifies a KeepAlive message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KeepAlive message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KeepAlive
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.KeepAlive;

            /**
             * Creates a plain object from a KeepAlive message. Also converts values to other types if specified.
             * @param message KeepAlive
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.KeepAlive, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KeepAlive to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Message. */
        interface IMessage {

            /** Message messageType */
            messageType?: (gauge.messages.Message.MessageType|null);

            /** This is used to synchronize messages & responses */
            messageId?: (number|Long|null);

            /** [ExecutionStartingRequest](#gauge.messages.ExecutionStartingRequest) */
            executionStartingRequest?: (gauge.messages.IExecutionStartingRequest|null);

            /** [SpecExecutionStartingRequest](#gauge.messages.SpecExecutionStartingRequest) */
            specExecutionStartingRequest?: (gauge.messages.ISpecExecutionStartingRequest|null);

            /** [SpecExecutionEndingRequest](#gauge.messages.SpecExecutionEndingRequest) */
            specExecutionEndingRequest?: (gauge.messages.ISpecExecutionEndingRequest|null);

            /** [ScenarioExecutionStartingRequest](#gauge.messages.ScenarioExecutionStartingRequest) */
            scenarioExecutionStartingRequest?: (gauge.messages.IScenarioExecutionStartingRequest|null);

            /** [ScenarioExecutionEndingRequest](#gauge.messages.ScenarioExecutionEndingRequest) */
            scenarioExecutionEndingRequest?: (gauge.messages.IScenarioExecutionEndingRequest|null);

            /** [StepExecutionStartingRequest](#gauge.messages.StepExecutionStartingRequest) */
            stepExecutionStartingRequest?: (gauge.messages.IStepExecutionStartingRequest|null);

            /** [StepExecutionEndingRequest](#gauge.messages.StepExecutionEndingRequest) */
            stepExecutionEndingRequest?: (gauge.messages.IStepExecutionEndingRequest|null);

            /** [ExecuteStepRequest](#gauge.messages.ExecuteStepRequest) */
            executeStepRequest?: (gauge.messages.IExecuteStepRequest|null);

            /** [ExecutionEndingRequest](#gauge.messages.ExecutionEndingRequest) */
            executionEndingRequest?: (gauge.messages.IExecutionEndingRequest|null);

            /** [StepValidateRequest](#gauge.messages.StepValidateRequest) */
            stepValidateRequest?: (gauge.messages.IStepValidateRequest|null);

            /** [StepValidateResponse](#gauge.messages.StepValidateResponse) */
            stepValidateResponse?: (gauge.messages.IStepValidateResponse|null);

            /** [ExecutionStatusResponse](#gauge.messages.ExecutionStatusResponse) */
            executionStatusResponse?: (gauge.messages.IExecutionStatusResponse|null);

            /** [StepNamesRequest](#gauge.messages.StepNamesRequest) */
            stepNamesRequest?: (gauge.messages.IStepNamesRequest|null);

            /** [StepNamesResponse](#gauge.messages.StepNamesResponse) */
            stepNamesResponse?: (gauge.messages.IStepNamesResponse|null);

            /** [SuiteExecutionResult ](#gauge.messages.SuiteExecutionResult ) */
            suiteExecutionResult?: (gauge.messages.ISuiteExecutionResult|null);

            /** [KillProcessRequest](#gauge.messages.KillProcessRequest) */
            killProcessRequest?: (gauge.messages.IKillProcessRequest|null);

            /** [ScenarioDataStoreInitRequest](#gauge.messages.ScenarioDataStoreInitRequest) */
            scenarioDataStoreInitRequest?: (gauge.messages.IScenarioDataStoreInitRequest|null);

            /** [SpecDataStoreInitRequest](#gauge.messages.SpecDataStoreInitRequest) */
            specDataStoreInitRequest?: (gauge.messages.ISpecDataStoreInitRequest|null);

            /** [SuiteDataStoreInitRequest](#gauge.messages.SuiteDataStoreInitRequest) */
            suiteDataStoreInitRequest?: (gauge.messages.ISuiteDataStoreInitRequest|null);

            /** [StepNameRequest](#gauge.messages.StepNameRequest) */
            stepNameRequest?: (gauge.messages.IStepNameRequest|null);

            /** [StepNameResponse](#gauge.messages.StepNameResponse) */
            stepNameResponse?: (gauge.messages.IStepNameResponse|null);

            /** [RefactorRequest](#gauge.messages.RefactorRequest) */
            refactorRequest?: (gauge.messages.IRefactorRequest|null);

            /** [RefactorResponse](#gauge.messages.RefactorResponse) */
            refactorResponse?: (gauge.messages.IRefactorResponse|null);

            /** [UnsupportedMessageResponse](#gauge.messages.UnsupportedMessageResponse) */
            unsupportedMessageResponse?: (gauge.messages.IUnsupportedMessageResponse|null);

            /** [CacheFileRequest](#gauge.messages.CacheFileRequest) */
            cacheFileRequest?: (gauge.messages.ICacheFileRequest|null);

            /** [StepPositionsRequest](#gauge.messages.StepPositionsRequest) */
            stepPositionsRequest?: (gauge.messages.IStepPositionsRequest|null);

            /** [StepPositionsResponse](#gauge.messages.StepPositionsResponse) */
            stepPositionsResponse?: (gauge.messages.IStepPositionsResponse|null);

            /** [ImplementationFileListRequest](#gauge.messages.ImplementationFileListRequest) */
            implementationFileListRequest?: (gauge.messages.IImplementationFileListRequest|null);

            /** [ImplementationFileListResponse](#gauge.messages.ImplementationFileListResponse) */
            implementationFileListResponse?: (gauge.messages.IImplementationFileListResponse|null);

            /** [StubImplementationCodeRequest](#gauge.messages.StubImplementationCodeRequest) */
            stubImplementationCodeRequest?: (gauge.messages.IStubImplementationCodeRequest|null);

            /** [FileDiff](#gauge.messages.FileDiff) */
            fileDiff?: (gauge.messages.IFileDiff|null);

            /** [ImplementationFileGlobPatternRequest](#gauge.messages.ImplementationFileGlobPatternRequest) */
            implementationFileGlobPatternRequest?: (gauge.messages.IImplementationFileGlobPatternRequest|null);

            /** [ImplementationFileGlobPatternResponse](#gauge.messages.ImplementationFileGlobPatternResponse) */
            implementationFileGlobPatternResponse?: (gauge.messages.IImplementationFileGlobPatternResponse|null);

            /** [SuiteExecutionResult ](#gauge.messages.SuiteExecutionResult ) */
            suiteExecutionResultItem?: (gauge.messages.ISuiteExecutionResultItem|null);

            /** [KeepAlive ](#gauge.messages.KeepAlive ) */
            keepAlive?: (gauge.messages.IKeepAlive|null);
        }

        /** One of the Request/Response fields will have value, depending on the MessageType set. */
        class Message implements IMessage {

            /**
             * Constructs a new Message.
             * @param [properties] Properties to set
             */
            constructor(properties?: gauge.messages.IMessage);

            /** Message messageType. */
            public messageType: gauge.messages.Message.MessageType;

            /** This is used to synchronize messages & responses */
            public messageId: (number|Long);

            /** [ExecutionStartingRequest](#gauge.messages.ExecutionStartingRequest) */
            public executionStartingRequest?: (gauge.messages.IExecutionStartingRequest|null);

            /** [SpecExecutionStartingRequest](#gauge.messages.SpecExecutionStartingRequest) */
            public specExecutionStartingRequest?: (gauge.messages.ISpecExecutionStartingRequest|null);

            /** [SpecExecutionEndingRequest](#gauge.messages.SpecExecutionEndingRequest) */
            public specExecutionEndingRequest?: (gauge.messages.ISpecExecutionEndingRequest|null);

            /** [ScenarioExecutionStartingRequest](#gauge.messages.ScenarioExecutionStartingRequest) */
            public scenarioExecutionStartingRequest?: (gauge.messages.IScenarioExecutionStartingRequest|null);

            /** [ScenarioExecutionEndingRequest](#gauge.messages.ScenarioExecutionEndingRequest) */
            public scenarioExecutionEndingRequest?: (gauge.messages.IScenarioExecutionEndingRequest|null);

            /** [StepExecutionStartingRequest](#gauge.messages.StepExecutionStartingRequest) */
            public stepExecutionStartingRequest?: (gauge.messages.IStepExecutionStartingRequest|null);

            /** [StepExecutionEndingRequest](#gauge.messages.StepExecutionEndingRequest) */
            public stepExecutionEndingRequest?: (gauge.messages.IStepExecutionEndingRequest|null);

            /** [ExecuteStepRequest](#gauge.messages.ExecuteStepRequest) */
            public executeStepRequest?: (gauge.messages.IExecuteStepRequest|null);

            /** [ExecutionEndingRequest](#gauge.messages.ExecutionEndingRequest) */
            public executionEndingRequest?: (gauge.messages.IExecutionEndingRequest|null);

            /** [StepValidateRequest](#gauge.messages.StepValidateRequest) */
            public stepValidateRequest?: (gauge.messages.IStepValidateRequest|null);

            /** [StepValidateResponse](#gauge.messages.StepValidateResponse) */
            public stepValidateResponse?: (gauge.messages.IStepValidateResponse|null);

            /** [ExecutionStatusResponse](#gauge.messages.ExecutionStatusResponse) */
            public executionStatusResponse?: (gauge.messages.IExecutionStatusResponse|null);

            /** [StepNamesRequest](#gauge.messages.StepNamesRequest) */
            public stepNamesRequest?: (gauge.messages.IStepNamesRequest|null);

            /** [StepNamesResponse](#gauge.messages.StepNamesResponse) */
            public stepNamesResponse?: (gauge.messages.IStepNamesResponse|null);

            /** [SuiteExecutionResult ](#gauge.messages.SuiteExecutionResult ) */
            public suiteExecutionResult?: (gauge.messages.ISuiteExecutionResult|null);

            /** [KillProcessRequest](#gauge.messages.KillProcessRequest) */
            public killProcessRequest?: (gauge.messages.IKillProcessRequest|null);

            /** [ScenarioDataStoreInitRequest](#gauge.messages.ScenarioDataStoreInitRequest) */
            public scenarioDataStoreInitRequest?: (gauge.messages.IScenarioDataStoreInitRequest|null);

            /** [SpecDataStoreInitRequest](#gauge.messages.SpecDataStoreInitRequest) */
            public specDataStoreInitRequest?: (gauge.messages.ISpecDataStoreInitRequest|null);

            /** [SuiteDataStoreInitRequest](#gauge.messages.SuiteDataStoreInitRequest) */
            public suiteDataStoreInitRequest?: (gauge.messages.ISuiteDataStoreInitRequest|null);

            /** [StepNameRequest](#gauge.messages.StepNameRequest) */
            public stepNameRequest?: (gauge.messages.IStepNameRequest|null);

            /** [StepNameResponse](#gauge.messages.StepNameResponse) */
            public stepNameResponse?: (gauge.messages.IStepNameResponse|null);

            /** [RefactorRequest](#gauge.messages.RefactorRequest) */
            public refactorRequest?: (gauge.messages.IRefactorRequest|null);

            /** [RefactorResponse](#gauge.messages.RefactorResponse) */
            public refactorResponse?: (gauge.messages.IRefactorResponse|null);

            /** [UnsupportedMessageResponse](#gauge.messages.UnsupportedMessageResponse) */
            public unsupportedMessageResponse?: (gauge.messages.IUnsupportedMessageResponse|null);

            /** [CacheFileRequest](#gauge.messages.CacheFileRequest) */
            public cacheFileRequest?: (gauge.messages.ICacheFileRequest|null);

            /** [StepPositionsRequest](#gauge.messages.StepPositionsRequest) */
            public stepPositionsRequest?: (gauge.messages.IStepPositionsRequest|null);

            /** [StepPositionsResponse](#gauge.messages.StepPositionsResponse) */
            public stepPositionsResponse?: (gauge.messages.IStepPositionsResponse|null);

            /** [ImplementationFileListRequest](#gauge.messages.ImplementationFileListRequest) */
            public implementationFileListRequest?: (gauge.messages.IImplementationFileListRequest|null);

            /** [ImplementationFileListResponse](#gauge.messages.ImplementationFileListResponse) */
            public implementationFileListResponse?: (gauge.messages.IImplementationFileListResponse|null);

            /** [StubImplementationCodeRequest](#gauge.messages.StubImplementationCodeRequest) */
            public stubImplementationCodeRequest?: (gauge.messages.IStubImplementationCodeRequest|null);

            /** [FileDiff](#gauge.messages.FileDiff) */
            public fileDiff?: (gauge.messages.IFileDiff|null);

            /** [ImplementationFileGlobPatternRequest](#gauge.messages.ImplementationFileGlobPatternRequest) */
            public implementationFileGlobPatternRequest?: (gauge.messages.IImplementationFileGlobPatternRequest|null);

            /** [ImplementationFileGlobPatternResponse](#gauge.messages.ImplementationFileGlobPatternResponse) */
            public implementationFileGlobPatternResponse?: (gauge.messages.IImplementationFileGlobPatternResponse|null);

            /** [SuiteExecutionResult ](#gauge.messages.SuiteExecutionResult ) */
            public suiteExecutionResultItem?: (gauge.messages.ISuiteExecutionResultItem|null);

            /** [KeepAlive ](#gauge.messages.KeepAlive ) */
            public keepAlive?: (gauge.messages.IKeepAlive|null);

            /**
             * Creates a new Message instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Message instance
             */
            public static create(properties?: gauge.messages.IMessage): gauge.messages.Message;

            /**
             * Encodes the specified Message message. Does not implicitly {@link gauge.messages.Message.verify|verify} messages.
             * @param message Message message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gauge.messages.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link gauge.messages.Message.verify|verify} messages.
             * @param message Message message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gauge.messages.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Message message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gauge.messages.Message;

            /**
             * Decodes a Message message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gauge.messages.Message;

            /**
             * Verifies a Message message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Message
             */
            public static fromObject(object: { [k: string]: any }): gauge.messages.Message;

            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @param message Message
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gauge.messages.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Message to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Message {

            /** MessageType enum. */
            enum MessageType {
                ExecutionStarting = 0,
                SpecExecutionStarting = 1,
                SpecExecutionEnding = 2,
                ScenarioExecutionStarting = 3,
                ScenarioExecutionEnding = 4,
                StepExecutionStarting = 5,
                StepExecutionEnding = 6,
                ExecuteStep = 7,
                ExecutionEnding = 8,
                StepValidateRequest = 9,
                StepValidateResponse = 10,
                ExecutionStatusResponse = 11,
                StepNamesRequest = 12,
                StepNamesResponse = 13,
                KillProcessRequest = 14,
                SuiteExecutionResult = 15,
                ScenarioDataStoreInit = 16,
                SpecDataStoreInit = 17,
                SuiteDataStoreInit = 18,
                StepNameRequest = 19,
                StepNameResponse = 20,
                RefactorRequest = 21,
                RefactorResponse = 22,
                UnsupportedMessageResponse = 23,
                CacheFileRequest = 24,
                StepPositionsRequest = 25,
                StepPositionsResponse = 26,
                ImplementationFileListRequest = 27,
                ImplementationFileListResponse = 28,
                StubImplementationCodeRequest = 29,
                FileDiff = 30,
                ImplementationFileGlobPatternRequest = 31,
                ImplementationFileGlobPatternResponse = 32,
                SuiteExecutionResultItem = 33,
                KeepAlive = 34
            }
        }
    }
}
